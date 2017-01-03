import { LastWeatherInfoService } from './../../services/last-weather-info.service';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommentsService } from '../../services/comments.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/zip';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
currentWeahterInfo;
  loading=false;
  minDataChars;
  maxDataChars;

  constructor(
    private weatherService: WeatherService, 
    private commentsService: CommentsService, 
    private lastWeatherInfoService: LastWeatherInfoService){ }

  ngOnInit() {
   const lastWeatherInfo = this.lastWeatherInfoService.get();
   if(lastWeatherInfo){
     this.onSearch(lastWeatherInfo.name);
   }
  }

  onSearch(searchString) {
    this.loading = true;

    this.weatherService.current(searchString)
      .zip(this.commentsService.list(searchString),this.weatherService.temperatures(searchString))
      .subscribe(results => {
        const currentWeahterInfo = results[0];
        this.lastWeatherInfoService.set(currentWeahterInfo);


        currentWeahterInfo.comments = results[1];
        this.currentWeahterInfo = currentWeahterInfo;

        const temperaturesData = results[2];
        
        this.minDataChars = temperaturesData.map(t => {
          return {
            label:t.name,
            value:t.min
          }
        });

        this.maxDataChars = temperaturesData.map(t => {
          return {
            label:t.name,
            value:t.max
          }
        });

        this.loading = false;
      })
  }
}
