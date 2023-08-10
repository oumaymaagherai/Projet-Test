import { Component } from '@angular/core';
import { AuthGuardService } from './services/auth/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[AuthGuardService],

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
}
