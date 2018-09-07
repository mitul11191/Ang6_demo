import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  loginApi = 'api/login';
  signUpApi = 'api/signup';
  usersApi = 'api/users';

  constructor() { }
}
