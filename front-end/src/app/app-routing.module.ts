import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SideNaveBarreComponent } from './components/side-nave-barre/side-nave-barre.component';
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  {path:'',canActivate:[AuthGuardService],component:SideNaveBarreComponent,children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'products',component: ProductsComponent},
    {path:'uploadFile',component:FileUploadComponent},
  ]},

 
  {path:'signIn',component:SignInComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'',redirectTo:'signIn',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[AuthGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
