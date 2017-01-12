import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-icon',
  template: '<img [src]="icon" />'
})
export class WeatherIconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
