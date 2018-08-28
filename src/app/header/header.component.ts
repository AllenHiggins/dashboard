import { Component, OnInit } from '@angular/core';
import { BigDataService } from '../Services/big-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data = [];
  labels = [];
  shippingData = [];
  profarmanceData = [];

  constructor(private bigDataService: BigDataService) { }

  ngOnInit() {
    this.labels = this.bigDataService.getYearLables();
    this.data = this.bigDataService.getBigData();
    this.shippingData = this.bigDataService.getShippingData();
    this.profarmanceData = this.bigDataService.getProformanceData();
  }

}
