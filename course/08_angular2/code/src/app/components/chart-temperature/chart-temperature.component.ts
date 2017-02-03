import { Component, OnInit, ElementRef } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-chart-temperature',
  templateUrl: './chart-temperature.component.html'
})
export class ChartTemperatureComponent implements OnInit {
  private chart;
  private data = {
    // A labels array that can contain any sort of values
    labels: [1, 2, 3, 4],
    series: [[5, 2, 8, 3]]
  };

  constructor(private element: ElementRef) { }

  ngOnInit() {
    var options = {
      // Don't draw the line chart points
      showPoint: true,
      // Disable line smoothing
      lineSmooth: false,
      // X-Axis specific configuration
      axisX: {
        // We can disable the grid for this axis
        showGrid: false,
        // and also don't show the label
        showLabel: false
      }
    };
    this.chart = new Chartist.Bar(this.element.nativeElement, this.data);
  }

}
