import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  toggleLeft = new Subject<boolean>();

  constructor() { }

  leftPannelToggle(pressed: boolean) {
    this.toggleLeft.next(pressed);
  }

}
