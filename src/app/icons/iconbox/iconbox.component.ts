import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iconbox',
  templateUrl: './iconbox.component.html',
  styleUrls: ['./iconbox.component.css']
})
export class IconboxComponent implements OnInit {

  @Input() icon: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
