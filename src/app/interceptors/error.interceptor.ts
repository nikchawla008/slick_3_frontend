import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth/auth.service";
import {LOCAL_STORAGE_AUTH_NAME} from "../utils/constants";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    public toastService: NzMessageService,
    public router: Router,
    public auth: AuthService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 0) {
        this.toastService.error('Something went wrong')
      }
      if (err.status === 401) {
        if(localStorage.getItem(LOCAL_STORAGE_AUTH_NAME) !== null){
          this.auth.logout();
        }
      }
      if(err.status === 403){
        this.toastService.error(err.statusText);
        this.router.navigate(['/']);
      }
      else if ([504].indexOf(err.status) !== -1) {
        this.toastService.error('Slow internet detected');
      }


      if (err.error instanceof Blob && err.error.type === "application/json") {
        // When request of type Blob, the error is also in Blob instead of object of the json data
        return new Promise<any>((resolve, reject) => {
          let reader = new FileReader();
          reader.onload = (e: Event) => {
            try {
              const errmsg = JSON.parse((<any>e.target).result);
              const error = new HttpErrorResponse({
                error: errmsg,
                headers: err.headers,
                status: err.status,
                statusText: err.statusText,
              })
              reject(error);
            } catch (e) {
              reject(err);
            }
          };
          reader.onerror = (e) => {
            reject(err);
          };
          reader.readAsText(err.error);
        });
      }


      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
