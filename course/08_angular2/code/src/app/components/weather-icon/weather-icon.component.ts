import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'weather-icon',
  template: '<img *ngIf="icon" [src]="icon"/>'
})
export class WeatherIconComponent implements OnChanges {
  @Input() weather;
  icon = '';

  ngOnChanges() {
    if(this.weather){
      this.icon = `http://openweathermap.org/img/w/${this.weather.icon}.png`;
    }
  }

}
