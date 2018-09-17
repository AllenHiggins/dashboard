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

  constructor() { }

  ngOnInit() {
  }

}
