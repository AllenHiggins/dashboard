import { Component, OnInit } from '@angular/core';
import { EventsService } from '../Services/events.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title: string;
  isFocus = false;
  innerOptions = false;
  pressedLeft = true;
  topNavPresed = false;
  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.checkWindowWidth();

    // Todo: dynamic title for which links user is on to show in nav ///
    this.title = 'DASHBOARD';                                        ///
    ////////////////////////////////////////////////////////////////////
  }

  toggleInnerOptions() {
    this.innerOptions = !this.innerOptions;
  }

  toggelTopNav() {
    this.topNavPresed = !this.topNavPresed;
    /*
      So main chart is not effected if inneroptions are displayed while topNav is closing
      In other words close innerOptions if open and navTop is closing
    */
    if (this.topNavPresed === false) {
      this.innerOptions = false;
    }
  }

  toggleleftnav() {
    this.pressedLeft = !this.pressedLeft;
    this.eventService.leftPannelToggle(this.pressedLeft);
  }

  checkWindowWidth() {
    window.addEventListener('resize', () => {
        /*
          Resets styles on header from white to blue and text from grey to white if window is resized
          otherwise stlye would still apply and when screen width is > 992 there is no way to undo
          white header and grey text as navTop icon is not displayed and full nav accoss the top of screen is.
        */
        this.topNavPresed = false;
        this.innerOptions = false;
    });

    // leftLogo set to corret possition init
    if (window.innerWidth >= 992) {
      this.pressedLeft = false;
    }

  }

}
