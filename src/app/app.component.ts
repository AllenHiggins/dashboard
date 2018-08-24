import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    this.checkWindowWidth('navtop', 'Extend', 'Notextend');
    this.checkWindowWidth('header', 'Extend', 'Notextend');
    this.checkWindowWidth('main', 'Extend', 'Notextend');
    this.checkWindowWidth('sideNav', 'LeftNavOut', 'LefNavIn');
  }

  checkWindowWidth(id, classOne, classTwo) {

    window.addEventListener('resize', () => {
      if ( window.innerWidth <= 992 ) {
        document.getElementById(id).className = classOne;
      } else {
        document.getElementById(id).className = classTwo;
      }
    });

  }
}
