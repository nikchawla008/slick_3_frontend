import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {exhaustMap, Observable, take} from 'rxjs';
import {AuthService} from "../services/auth/auth.service";

@Injectable()
export class ApiInterceptorInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService,) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.auth.currentUser.pipe(take(1), exhaustMap(user => {
      if (user) {
        const modifiedRequest = request.clone({
          setHeaders: {
            Authorization: 'Bearer ' + user['token'],
          }
        });
        return next.handle(modifiedRequest);
      }
      return next.handle(request);
    }));
  }
}
