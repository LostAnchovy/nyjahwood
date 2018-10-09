import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelper} from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private _http:HttpClient) { }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  loggedIn(){
    return localStorage.getItem('token')   
  }
  
  public isAuthenticated(): Observable<boolean> | boolean{
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    // return !this.jwtHelper.isTokenExpired(token); 
    // this.isAuth.next(true)
    // return this.isAuth.asObservable();
    if(!token){
      return false
    }if(token){
      return true
    }
  }

}
