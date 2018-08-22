import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isFocus = false;
  innerOptions = false;
  constructor() { }

  ngOnInit() {
  }

  toggleInnerOptions() {
    this.innerOptions = !this.innerOptions;
  }
}
