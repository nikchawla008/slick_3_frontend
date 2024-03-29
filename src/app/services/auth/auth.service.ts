import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, catchError, map, take} from "rxjs";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";
import {LOCAL_STORAGE_AUTH_NAME} from "../../utils/constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public http: HttpClient,
    public router: Router,
    private toastService: NzMessageService
    ) {
  }

  currentUser = new BehaviorSubject<any>(null)


  login(requestBody: any) {

    this.loginAPI(requestBody).subscribe({
      next: (response: any) => {
        // Save to local storage
        this.currentUser.next(response)
        localStorage.setItem(LOCAL_STORAGE_AUTH_NAME, JSON.stringify(response))
        this.router.navigate(['/survey']);
      }, error: (err) => {
        this.toastService.error(err)
      }
    })
  }


  loginAPI(requestBody: any) {
    return this.http.post(`${environment.backendUrl}/accountManagement/login`, requestBody).pipe(take(1), map((response: any) => response.account), catchError(err => {
      if(err.error.message) {
        throw err.error.message
      } else {
        throw err
      }
    }))
  }


  get isAuthenticated() {
    const localStorageData = localStorage.getItem(LOCAL_STORAGE_AUTH_NAME)
    if(localStorageData) {
      this.currentUser.next(JSON.parse(localStorageData))
    } else {
      this.currentUser.next(null)
    }
    return !!localStorageData
  }

  logout(){
    const user = this.currentUser.getValue();
    localStorage.removeItem(LOCAL_STORAGE_AUTH_NAME);
    this.router.navigate(['/auth']).then()
    this.currentUser.next(null)

    const requestBody = {
      email: user.email
    }
    this.http.post(`${environment.backendUrl}/accountManagement/logout`, requestBody).subscribe({
      next: () => {
      },
      error: () => {
      }
    })

  }

  /**
   * Check access token API
   */
  checkAccessToken() {
    return this.http.post(`${environment.backendUrl}/accountManagement/authenticate`, {}).pipe(take(1), map((response: any) => response.account), catchError(err => {
      if(err.error.message) {
        throw err.error.message
      } else {
        throw err
      }
    }))
  }

}
