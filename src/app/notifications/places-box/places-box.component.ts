import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationsService } from '../../Services/notifications.service';

@Component({
  selector: 'app-places-box',
  templateUrl: './places-box.component.html',
  styleUrls: ['./places-box.component.css']
})
export class PlacesBoxComponent implements OnInit, OnDestroy {

  constructor(private notificationService: NotificationsService) { }

  ngOnInit() {
  }

  isPressed(btn: string) {
    this.notificationService.isAlert(btn);
  }

  ngOnDestroy() {
 //   this.notificationService.noticeIsPressed.unsubscribe();
  }

}
