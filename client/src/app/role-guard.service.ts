import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
} from '@angular/router';
import * as decode from 'jwt-decode';
import jwt from 'jsonwebtoken'

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem('token')
    if(!token){
      this._router.navigate(['login'])
    }
    // decode the token to get its payload then check to see if the admin role is true || false
    const tokenPayload = decode(token);
    if (!token || tokenPayload.isAdmin == false) {
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }

}
