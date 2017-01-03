import { LastWeatherInfoService } from './../../services/last-weather-info.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html'
})
export class NewCommentComponent implements OnInit {
  private lastWeatherInfo;

  constructor(
    private lastWeatherInfoService: LastWeatherInfoService,
    private router: Router) { }

  ngOnInit() {
    this.lastWeatherInfo = this.lastWeatherInfoService.get();
    if(!this.lastWeatherInfo){
        this.router.navigate(['/']);
    }
  }

}
