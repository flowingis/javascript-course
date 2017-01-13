import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: '<img [src]="icon" />'
})
export class IconComponent implements OnChanges {
  @Input() weather;
  public icon: string;

  constructor() { }

  ngOnChanges() {
    if (this.weather) {
      this.icon = `http://openweathermap.org/img/w/${this.weather.icon}.png`;
    }
  }

}
