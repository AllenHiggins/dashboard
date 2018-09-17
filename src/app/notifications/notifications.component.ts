import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationsService } from '../Services/notifications.service';
import { AlertBoxComponent } from './alert-box/alert-box.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy() {
   // this.notificationService.noticeIsPressed.unsubscribe();
  }

}
