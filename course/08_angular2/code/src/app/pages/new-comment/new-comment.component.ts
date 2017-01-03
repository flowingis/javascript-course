import { CommentsService } from './../../services/comments.service';
import { LastWeatherInfoService } from './../../services/last-weather-info.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html'
})
export class NewCommentComponent implements OnInit {
  private lastWeatherInfo;
  message;

  constructor(
    private lastWeatherInfoService: LastWeatherInfoService,
    private commentsService: CommentsService,
    private router: Router) { }

  ngOnInit() {
    this.lastWeatherInfo = this.lastWeatherInfoService.get();
    if(!this.lastWeatherInfo){
        this.router.navigate(['/']);
    }
  }

  onSave() {
    if(this.message){
      const comment = {
        message:this.message,
        city:this.lastWeatherInfo.name
      };

      this.commentsService.add(comment).subscribe((r) => {
        this.router.navigate(['/']);
      })
    }
  }

}
