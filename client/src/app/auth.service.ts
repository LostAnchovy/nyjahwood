import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelper} from 'angular2-jwt';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthService {
  isAuth = new BehaviorSubject<boolean>(false);
  /**
   *
   * @returns {Observable<T>}
   */

  constructor(private _http:HttpClient) { }
  
  cachedRequests: Array<HttpRequest<any>> = [];

  public getToken(): string {
    return localStorage.getItem('token');
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

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }

}
