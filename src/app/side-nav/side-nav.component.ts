import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventsService } from '../Services/events.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, OnDestroy {
  isPressed: boolean;
  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.eventService.toggleLeft.subscribe( data => {
      this.isPressed = data;
    });
  }

  ngOnDestroy() {
    this.eventService.toggleLeft.unsubscribe();
  }

}
