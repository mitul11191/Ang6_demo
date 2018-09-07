import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { environment } from '../../environments/environment'
import { ConstantsService } from '../services/constants.service'
import { CommonHttpService } from '../services/common-http.service'
import { LocalStorageService } from '../services/local-storage.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userLists: any = {}
  headerAuth: any = {}
  constructor(private apiservice: ApiService,
    private _constantsService: ConstantsService,
    private _commonHttpService: CommonHttpService,
    private _localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }


  getAllUsers() {

    let authHeaders = new Headers({ 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmFtZSI6Im1pdHVsIiwiaWF0IjoxNTM2MzE4NDUwfQ.Vq9JDAFHTa8jTIwUGpGdpeibDrZNMZLzeD8RU3w0KbA' });
    this.headerAuth = { headers: authHeaders }

    var url = environment.apiBaseUrl + this._constantsService.usersApi;
    this._commonHttpService.getAllRecord(url, this.headerAuth).then((res: any) => {
      if (res.success) {
        console.log("userLists....Success", this.userLists);
      } else {
        console.log("userLists....Error", res.reject);
      }
    });

  }

}
