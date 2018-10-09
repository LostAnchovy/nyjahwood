import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private auth:AuthService){}
  // intercept(req, next) {
  //   let tokenizedReq = req.clone(
  //     {
  //       headers: req.headers.set('Authorization', 'bearer ' + this.auth.getToken())
  //     }
  //   )
  //   return next.handle(tokenizedReq)
  // }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });

    return next.handle(request);
  }

}
