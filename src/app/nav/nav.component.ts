import { Component, OnInit } from '@angular/core';
import { EventsService } from '../Services/events.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isFocus = false;
  innerOptions = false;
  pressedLeft = false;
  constructor(private eventService: EventsService) { }

  ngOnInit() {
  }

  toggleInnerOptions() {
    this.innerOptions = !this.innerOptions;
  }

  toggleleftnav() {
    this.pressedLeft = !this.pressedLeft;
    this.eventService.leftPannelToggle(this.pressedLeft);
  }
}
