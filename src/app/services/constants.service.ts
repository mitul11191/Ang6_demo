import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  loginApi='/api/login';
  registrationApi='/api/registration';     
  usersApi='/api/user';

  constructor() { }
}
