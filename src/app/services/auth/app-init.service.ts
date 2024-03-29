import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";
import {firstValueFrom} from "rxjs";
import {LOCAL_STORAGE_AUTH_NAME} from "../../utils/constants";

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(
    public auth: AuthService
  ) { }


  async init() {
    if(this.auth.isAuthenticated) {
      await firstValueFrom(this.auth.checkAccessToken()).then((response: any) => {
        localStorage.setItem(LOCAL_STORAGE_AUTH_NAME, JSON.stringify(response));
        this.auth.currentUser.next(response);
      }).catch((err: any)=>{
        this.auth.logout()
      })
    }

  }
}
