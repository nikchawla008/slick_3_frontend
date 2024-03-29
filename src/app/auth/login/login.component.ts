import {Component} from '@angular/core';
import {ErrorService} from "../../services/error.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NO_WHITE_SPACES_ONLY} from "../../utils/common";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, NO_WHITE_SPACES_ONLY, Validators.email]),
    password: new FormControl('', [Validators.required, NO_WHITE_SPACES_ONLY])
  })

  showPassword: boolean = false

  constructor(
    public errorService: ErrorService,
    public auth: AuthService
  ) {

  }


  get loginFormControl() {
    return this.loginForm.controls
  }


  onClickEye() {
    this.showPassword = !this.showPassword
  }

  submitLogin() {
    if(this.loginForm.valid) {
      const requestBody = {
        ...this.loginForm.getRawValue()
      }

      this.auth.login(requestBody)
    } else {
      this.loginForm.markAllAsTouched()
    }
  }


}
