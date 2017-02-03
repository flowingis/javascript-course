import { CurrentWeatherService } from '../../services/current-weather.service';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { MessagesService } from '../../services/messages.service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/zip';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public currentWeather;
  public loading;
  public city;
  public messages;
  constructor(
    private weatherService: WeatherService,
    private messagesService: MessagesService,
    private router: Router,
    private currentWeatherService: CurrentWeatherService) {

  }

  ngOnInit() {
    const weather = this.currentWeatherService.get();
    if (weather) {
      this.currentWeather = weather;
      this.messagesService.list(this.currentWeather.name).subscribe(res => {
        this.messages = res;
      }
      );
    }
  }

  public onSearch(value) {
    this.loading = true;
    this.city = value;
    this.weatherService.current(value).zip(
      this.messagesService.list(value)).subscribe(res => {
        this.currentWeather = res[0];
        console.log(this.currentWeather);
        this.currentWeatherService.set(this.currentWeather);
        this.messages = res[1];
        this.loading = false;
      });
    console.log(value);
  }

  public goAddComment() {
    this.router.navigateByUrl('add-comment');
  }

}
