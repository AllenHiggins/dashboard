import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-style-box',
  templateUrl: './style-box.component.html',
  styleUrls: ['./style-box.component.css']
})
export class StyleBoxComponent implements OnInit {

  @Input() heading: string;
  constructor() { }

  ngOnInit() {
  }

}
