import { MessagesService } from './services/messages.service';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

import 'rxjs/add/operator/zip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public currentWeather;
  public loading;
  public city;
  public messages;
  constructor(
    private weatherService: WeatherService,
    private messagesService: MessagesService) {

  }

  ngOnInit() {

  }

  public onSearch(value) {
    this.loading = true;
    this.city = value;
    this.weatherService.current(value).zip(
      this.messagesService.list(value)).subscribe(res => {
        this.currentWeather = res[0];
        this.messages = res[1];
        this.loading = false;
      });
    console.log(value);
  }

}
