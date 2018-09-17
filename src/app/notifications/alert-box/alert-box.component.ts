import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {

  @Input() danger: boolean;
  @Input() warning: boolean;
  @Input() success: boolean;
  @Input() primary: boolean;
  @Input() info: boolean;
  @Input() leftIcon: boolean;
  @Input() rightIcon: boolean;
  @Input() msg: string;
  hide = false;
  remove = false;

  constructor() { }

  ngOnInit() {
  }

  TopNotificationAdd() {
    this.setTimeDisplay();
  }

  setTimeDisplay() {
    // Hide after 2 seconds
    setTimeout(() => {
      this.hide = true;
    }, 2000);
  }

  close() {
    this.remove = true;
  }

}
