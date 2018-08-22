import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data = [];
  labels = [];

  constructor() { }

  ngOnInit() {
    this.data = [50, 100, 150, 190, 130, 90, 150, 160, 120, 140, 190, 95];
    this.labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  }

}
