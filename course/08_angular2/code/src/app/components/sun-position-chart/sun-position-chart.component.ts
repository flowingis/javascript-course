import { Component, OnChanges, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'sun-position-chart',
  templateUrl: './sun-position-chart.component.html'
})
export class SunPositionChartComponent implements OnChanges {
  @Input() sunset;
  @Input() sunrise;
  interval;
  untilSunset;
  
  constructor() { }

  ngOnChanges() {
    if(this.sunset && this.sunrise){
      if(this.interval){
        clearInterval(this.interval);
      }

      this.untilSunset = moment.duration(moment().diff(moment.unix(this.sunset))).humanize()
      this.interval = setInterval(() => {
        this.untilSunset = moment.duration(moment().diff(moment.unix(this.sunset))).humanize()
      },60000);
    }
  }

}
