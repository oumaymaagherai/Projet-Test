import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private usersService: UsersService,
private router : Router
  ) {
    this.signUpForm = this._fb.group({
      login: '',
      name: '',
      password: '',

    })

  }
  signUp() {
    this.usersService.addUser(this.signUpForm.value).subscribe(
      (res:any) =>{
        this.router.navigate(['signIn'])
      },
      error=>{
        console.error(error)
      }
    )
  }
}
