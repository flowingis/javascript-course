import { CelsiusPipe } from './../../pipes/celsius.pipe';
import { Component, Input, ElementRef, OnChanges } from '@angular/core';
import * as Chartist from 'chartist';

const OPTIONS = {
      width: 500,
      height: 400
    };


@Component({
  selector: 'temperatures-chart',
  templateUrl: './temperatures-chart.component.html'
})
export class TemperaturesChartComponent implements OnChanges {

  @Input() values;
  chart;

  constructor(private element: ElementRef, private celsiusPipe: CelsiusPipe) {
    
  }

  ngOnChanges() {
    var data = {
      labels: this.values.map(v => v.label),
      series: [this.values.map(v => v.value).map(v => this.celsiusPipe.transform(v))]
    };

    if(this.chart){
      this.chart.update(data)
    }else{
      this.chart = new Chartist.Bar(this.element.nativeElement, data, OPTIONS);
    }
  }

}
