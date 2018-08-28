import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BigDataService {
  private yearLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  private data = [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95];
  private ShippingData = [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630];
  private performanceData = [80, 99, 86, 96, 123, 100, 75, 88, 90, 123, 155];
  constructor() { }

  getYearLables() {
    return this.yearLabels.slice();
  }

  getBigData() {
    return this.data.slice();
  }

  getShippingData() {
    return this.ShippingData.slice();
  }

  getProformanceData() {
    return this.performanceData.slice();
  }
}
