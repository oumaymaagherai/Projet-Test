import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  private apiUsers = "http://localhost:3000/users" ; 
  private authenticated = false;
  constructor(private http:HttpClient) { }


  addUser(user : any): Observable<any>{
    return this.http.post<any>(this.apiUsers, user);
  }
  getAllUsers() : Observable<any>{
    return this.http.get<any>(this.apiUsers);
  }

  userAutheticated(){
    this.authenticated = true ;
  }

  isAuthenticated() : boolean{
    return this.authenticated ;
  }


}
