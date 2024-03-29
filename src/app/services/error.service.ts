import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  FIELD_REQUIRED = 'This field is required.'
  PASSWORD_INCORRECT = 'Password/Email is incorrect.'
  INVALID_EMAIL = 'Please enter a valid email. Correct format is john@doe.com.'
}
