import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
} from '@angular/router';
import * as decode from 'jwt-decode';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem('token')
    if(!token){
      this._router.navigate(['login'])
    }
    // decode the token to get its payload
    const tokenPayload = decode(token);
    if (!token || tokenPayload.isAdmin == false) {
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }

}
