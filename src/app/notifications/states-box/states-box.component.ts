import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-states-box',
  templateUrl: './states-box.component.html',
  styleUrls: ['./states-box.component.css']
})
export class StatesBoxComponent implements OnInit {

  @Input() heading: string;
  constructor() { }

  ngOnInit() {
  }

}
