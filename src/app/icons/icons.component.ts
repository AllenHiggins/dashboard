import { Component, OnInit } from '@angular/core';
import { IconsService } from '../Services/icons.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  iconList = <any>[];

  constructor(private iconService: IconsService) { }

  ngOnInit() {
    this.iconList = <any>this.iconService.getIconList();
  }

}
