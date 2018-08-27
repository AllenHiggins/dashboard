import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventsService } from '../Services/events.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit, OnDestroy {
  toFull = false;

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.eventService.toggleLeft.subscribe( data => {
      this.toFull = data;
    });
    this.s();
    console.log(this.toFull);
  }

  s() {
    if ( window.innerWidth < 992 ) {
      this.toFull = true;
    }
  }

  ngOnDestroy() {
    this.eventService.toggleLeft.unsubscribe();
  }

}
