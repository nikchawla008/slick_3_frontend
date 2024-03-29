import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    public router: Router
  ) {

  }

  showHeader: boolean = false;

  ngOnInit() {
    this.router.events.subscribe({
      next: (event) => {
        if( event instanceof NavigationEnd) {
          this.showHeader = !event.urlAfterRedirects.includes('/auth')
        }
      }
    })
  }

  title = 'new-app';

}
