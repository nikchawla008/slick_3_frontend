import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from "../services/auth/auth.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    public auth: AuthService,
    public router: Router,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
    const path = state.url
    if(!this.auth.isAuthenticated) {
      if(!path.includes('auth/login')){
        return this.router.parseUrl('/auth/login')
      }
      return true;
    } else {
      if(path.includes('/auth')) {
        return this.router.parseUrl('/survey/s1')
      }
      return true
    }

  }
}
