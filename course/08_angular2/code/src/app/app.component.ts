import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { CommentsService } from './services/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentWeahterInfo;
  loading=false;

  constructor(private weatherService: WeatherService, private commentsService: CommentsService){
   
  }

  onSearch(searchString) {
    this.loading = true;
    this.weatherService.current(searchString).subscribe(res => {
      this.currentWeahterInfo = res;
      this.loading = false;
    })

    this.commentsService.list(searchString).subscribe(res => {
      console.log(res)
    })
  }
}
