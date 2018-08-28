import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chartcard',
  templateUrl: './chartcard.component.html',
  styleUrls: ['./chartcard.component.css']
})
export class ChartcardComponent implements OnInit {
  @Input() topLabel: string;
  @Input() bottomLabel: string;
  @Input() title: string;
  @Input() bottomIcon: string;
  @Input() settingsTab: boolean;
  @Input() chartType: string;
  @Input() backgroundColor: string;
  @Input() borderColor: string;
  @Input() ChartID: string;
  @Input() labels: string[];
  @Input() data: string[];
  showSettings: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }

}
