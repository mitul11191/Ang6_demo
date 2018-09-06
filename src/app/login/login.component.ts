import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { environment } from '../../environments/environment';
import { ConstantsService } from '../services/constants.service';
import { CommonHttpService } from '../services/common-http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public activeTab = 'login-form';
  private loginModel = {};

  constructor(private router: Router,
    private apiservice: ApiService,
    private _constantsService: ConstantsService,
    private _commonHttpService: CommonHttpService
  ) { }

  ngOnInit() {
  }

  tabActive(val) {
    this.activeTab = val;
  }

  login() {

    console.log("loginModel", this.loginModel);

    var url = environment.apiBaseUrl + this._constantsService.loginApi;
    this._commonHttpService.save(url, this.loginModel).then((res: any) => {
      if (res.success) {
        console.log("login Success", res.success);
      } else {
        console.log("login Error", res.reject);
        // if (typeof res.message === 'object') {
        //   this.serverMessage = res.message;
        // } else {

        // }
      }
    });
  }

}
