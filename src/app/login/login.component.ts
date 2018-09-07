import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { environment } from '../../environments/environment';
import { ConstantsService } from '../services/constants.service';
import { CommonHttpService } from '../services/common-http.service';
import { LocalStorageService } from '../services/local-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public activeTab = 'login-form';
  private loginModel: any = {};
  private userModel: any = {};

  constructor(private router: Router,
    private apiservice: ApiService,
    private _constantsService: ConstantsService,
    private _commonHttpService: CommonHttpService,
    private _localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
  }

  tabActive(val) {
    this.activeTab = val;
  }

  login() {

    const userData = {
      'uname': this.loginModel.username,
      'pass': this.loginModel.password
    }

    var url = environment.apiBaseUrl + this._constantsService.loginApi;
    this._commonHttpService.save(url, userData).then((res: any) => {
      if (res.success) {
        this._localStorageService.setLocalStorageValByKey(res.user);
        this.router.navigate(['/user-list']);
      } else {
        console.log("login Error", res.reject);
      }
    });
  }


  saveUser() {

    console.log("userModel..........", this.userModel);

    var url = environment.apiBaseUrl + this._constantsService.signUpApi;
    this._commonHttpService.save(url, this.userModel).then((res: any) => {
      this.userModel = {};
      if (res.success) {
        console.log("signUp Success", res.user);
        this.router.navigate(['/login']);
      } else {
        console.log("signUp Error", res.reject);
      }
    });

  }

}
