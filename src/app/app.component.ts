import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'ang-crud';
  public href: string = "";
  public route: string;

  constructor(location: Location, private router: Router) {


    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.route = location.path();
        console.log("if....", this.route);
      }
    });
  }

  ngOnInit() {
    this.href = this.router.url;
  }
}
