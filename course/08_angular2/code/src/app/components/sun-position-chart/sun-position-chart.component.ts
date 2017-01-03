import { Component, OnChanges, Input, ElementRef } from '@angular/core';
import * as moment from 'moment';
import * as d3 from 'd3';

const createSun = (svgContainer, now, sunrise, sunset) => {
  let ratio = (now - sunrise) / (sunset - sunrise);

  if(ratio < 0){
    ratio = 0;
  }

  if(ratio > 1){
    ratio = 1;
  }

  const green = Math.floor(255 - (200 * ratio));
  const x = (1100 * ratio);
  const y = Math.pow(x - 550,2) / 1000;

  return svgContainer.append("circle")
      .attr("cx", Math.floor(x))
      .attr("cy", Math.floor(y) + 50)
      .attr("r", 50)
      .attr("fill", `rgb(255,${green},0)`)
}

@Component({
  selector: 'sun-position-chart',
  templateUrl: './sun-position-chart.component.html'
})
export class SunPositionChartComponent implements OnChanges {
  @Input() sunset;
  @Input() sunrise;
  interval;
  untilSunset;

  constructor(private element: ElementRef) { }

  private update() {
    
    const now = moment();

    this.untilSunset = moment.duration(now.diff(moment.unix(this.sunset))).humanize();
    const svgContainer = d3.select(this.element.nativeElement)
      .append('svg')
      .attr('width', '100%')
      .attr('viewBox', '0 0 1100 350');

    const sun = createSun(svgContainer, now.subtract(6,'hours').unix(), this.sunrise, this.sunset)

    const ground = svgContainer.append("rect")
      .attr("x", 0)
      .attr("y", 300)
      .attr("width", 1100)
      .attr("height", 50)
      .attr("fill", "green");

    
  }

  ngOnChanges() {
    if (this.sunset && this.sunrise) {
      if (this.interval) {
        clearInterval(this.interval);
      }

      this.update()
      this.interval = setInterval(() => {
        this.update()
      }, 60000);


    }
  }

}
