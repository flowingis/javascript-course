import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommentsService } from '../../services/comments.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/zip';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
currentWeahterInfo;
  loading=false;

  constructor(private weatherService: WeatherService, private commentsService: CommentsService){ }

  onSearch(searchString) {
    this.loading = true;

    this.weatherService.current(searchString).zip(this.commentsService.list(searchString)).subscribe(results => {
      const currentWeahterInfo = results[0];
      currentWeahterInfo.comments = results[1];
      this.currentWeahterInfo = currentWeahterInfo;
      this.loading = false;
    })
  }
}
