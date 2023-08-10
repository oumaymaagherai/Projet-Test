import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UsersService } from '../users/users.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private userService: UsersService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      
    if (this.userService.isAuthenticated()) {
      return true;
    } else {
       this.router.navigate(['/signIn']); 
       return false ;
    }
  }
}




 