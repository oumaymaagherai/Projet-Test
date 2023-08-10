import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CoreService } from 'src/app/services/core/core.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup;
  constructor(private _fb: FormBuilder,
    private _usersService: UsersService, private core: CoreService
    , private router: Router) {
    this.signInForm = _fb.group({
      login: "",
      password: ""
    })
  }

  signIn() {
    this._usersService.getAllUsers().subscribe(users => {
      console.log(users);
      const user = users.find((a: any) => {
        console.log(a.login + this.signInForm.value.login);
        return a.login === this.signInForm.value.login && a.password === this.signInForm.value.password
      });
      if (user) {
        this.router.navigate([''])
        this._usersService.userAutheticated();
      }
      else
        this.core.openSnackBar("User not found")
    })
  }
}
