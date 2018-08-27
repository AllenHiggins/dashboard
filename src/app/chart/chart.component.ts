import { Component, OnInit, AfterViewInit , ElementRef, Input } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit, AfterViewInit {
  chart: any;
  htmlRef: any;

  @Input() id: string;
  @Input() chartType: string;
  @Input() defaultFontColor: string;
  @Input() labelsFontColor: string;
  @Input() chartLabel: string;
  @Input() chartData = [];
  @Input() chartLabels = [];
  @Input() backgroundColor = [];
  @Input() borderColor = [];
  @Input() borderWidth = 1;
  @Input() height: number;
  @Input() hoverRadius: number;
  @Input() radius: number;
  @Input() stepSize: number;
  @Input() tilteDisplay = true;
  @Input() beginAtZero = true;


  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initChart();
  }

  initChart() {

    Chart.defaults.global.defaultFontColor = this.defaultFontColor;
    Chart.defaults.global.elements.point.hoverRadius = this.hoverRadius;
    Chart.defaults.global.elements.point.radius = this.radius;

    this.htmlRef = this.elementRef.nativeElement.querySelector(`#` + this.id);
    this.chart = new Chart(this.htmlRef, {
      type: this.chartType,
      data: {
          labels: this.chartLabels,
          datasets: [{
              label: this.chartLabel,
              data: this.chartData,
              backgroundColor: this.backgroundColor,
              borderColor: this.borderColor,
              borderWidth: this.borderWidth,
          }],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: '#ffffff',
          bodyFontColor: '#2a5788',
          titleFontColor: '#2a5788',
          borderColor: '#2a5788'
        },
        legend: {
          display: false,
          labels: {
            fontColor: this.labelsFontColor
          }
        },
        title: {
          display: this.tilteDisplay
        },
        scales: {
            yAxes: [{
              gridLines: {
                color: 'rgba(171, 171, 171, 0.33)',
                drawBorder: false,
                zeroLineColor: 'rgba(0, 0, 0, 0)',
              },
              ticks: {
                // stepSize: this.stepSize,
                beginAtZero: this.beginAtZero
              }
            }],
            xAxes: [{
              gridLines: {
                display: false,
                drawBorder: false
              },
            }]
          }
      }
    });

  }

}
