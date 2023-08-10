import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductDeleteConfirmationComponent } from './components/product-delete-confirmation/product-delete-confirmation.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { SideNaveBarreComponent } from './components/side-nave-barre/side-nave-barre.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductDeleteConfirmationComponent,
    ProductsComponent,
    ProductEditComponent,
    FileUploadComponent,
    SideNaveBarreComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    , MatCheckboxModule, MatToolbarModule,
    MatExpansionModule,
    MatOptionModule,
    MatListModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule, MatIconModule, MatTreeModule,
    HttpClientModule,
    MatDialogModule,
    MatRadioModule, ReactiveFormsModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule, MatButtonModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
