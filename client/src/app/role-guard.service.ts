import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import * as decode from 'jwt-decode';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(private _auth: AuthService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    const tokenPayload = decode(token);
    console.log(tokenPayload)
    if (!token || tokenPayload.isAdmin == false) {
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }

}
