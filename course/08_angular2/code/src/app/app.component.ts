import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentWeahterInfo;
  constructor(private weatherService: WeatherService){
    weatherService.current().subscribe(res => {
      this.currentWeahterInfo = res;
    })
  }
}
