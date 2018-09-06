import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor( private apiservice : ApiService ) { }

  ngOnInit() {
    this.users();
  }

  users() {
    this.apiservice.userList().subscribe((response) => {
      console.log("Users List..............", response);
    });    
  }

}
