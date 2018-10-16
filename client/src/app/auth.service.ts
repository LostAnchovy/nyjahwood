import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as decode from 'jwt-decode';

@Injectable()
export class AuthService {

  constructor(private _http:HttpClient) { }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  loggedIn(){
    return localStorage.getItem('token')   
  }

  admin(){
     var token = localStorage.getItem('token')
     const tokenPayload = decode(token);
     if (tokenPayload.isAdmin == false){
       return false
     } else
     return true
  }
  
  public isAuthenticated(): Observable<boolean> | boolean{
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // return !this.jwtHelper.isTokenExpired(token); 
    if(!token){
      return false
    }if(token){
      return true
    }
  }

}
