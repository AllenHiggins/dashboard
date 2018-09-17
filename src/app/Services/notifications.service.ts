import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertBoxComponent } from '../notifications/alert-box/alert-box.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  lTList: Array<number> = [];
  lCList: Array<number> = [];
  lRList: Array<number> = [];

  @Output() noticeIsPressed = new Subject<string>();
  constructor() { }

  isAlert(opt: string) {

    switch (opt) {
      case 'TL':
        this.lTList.push(1);
        break;
      case 'TC':
        this.lCList.push(1);
        break;
      case 'TR':
        this.lRList.push(1);
        break;
    }

    this.noticeIsPressed.next(opt);
  }

  getTLNotices() {
    return this.lTList.slice();
  }

  getTCNotices() {
    return this.lCList.slice();
  }

  getTRNotices() {
    return this.lRList.slice();
  }

  remove(opt) {
    switch (opt) {
      case 'TL':
        this.lTList.pop();
        break;
      case 'TC':
        this.lCList.pop();
        break;
      case 'TR':
        this.lRList.pop();
        break;
    }
  }
}
