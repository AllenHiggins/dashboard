import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './Services/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  lTList: Array<number> = [];
  lCList: Array<number> = [];
  lRList: Array<number> = [];

  constructor(private notificationService: NotificationsService) {}

  ngOnInit() {
    this.checkWindowWidth('mainNav', 'Extend', 'Notextend');
    this.checkWindowWidth('navtop', 'Extend', 'Notextend');
    this.checkWindowWidth('main', 'Extend', 'Notextend');
    this.checkWindowWidth('sideNav', 'LeftNavOut', 'LefNavIn');

    this.notificationService.noticeIsPressed.subscribe((btnName) => {

      switch (btnName) {
        case 'TL':
          this.lTList = this.notificationService.getTLNotices();
          break;
        case 'TC':
          this.lCList = this.notificationService.getTCNotices();
          break;
        case 'TR':
          this.lRList = this.notificationService.getTRNotices();
          break;
      }
    });
  }

  close(opt) {
    this.notificationService.remove(opt);
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

