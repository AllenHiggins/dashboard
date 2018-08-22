import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BigDataService {
  private data = [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95];
  constructor() { }

  getBigData() {
    return this.data;
  }
}
