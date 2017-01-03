import { Component, OnInit, Input } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'temperatures-chart',
  templateUrl: './temperatures-chart.component.html'
})
export class TemperaturesChartComponent implements OnInit {

  @Input() values;

  constructor() {
    console.log(Chartist);
  }

  ngOnInit() {
  }

}
