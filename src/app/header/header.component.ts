import { Component, OnInit } from '@angular/core';
import { BigDataService } from '../Services/big-data.service';
import { EventsService } from '../Services/events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data = [];
  labels = [];

  constructor(
    private bigDataService: BigDataService,
    private eventService: EventsService) { }

  ngOnInit() {
    this.labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    this.data = this.bigDataService.getBigData();
  }

}
