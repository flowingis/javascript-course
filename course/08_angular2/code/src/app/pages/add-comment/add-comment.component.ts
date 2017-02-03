import { MessagesService } from '../../services/messages.service';
import { CurrentWeatherService } from '../../services/current-weather.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html'
})
export class AddCommentComponent implements OnInit {
  private currentWeather;
  public commentText;
  private comment;

  constructor(
    private currentWeatherService: CurrentWeatherService,
    private router: Router,
    private messagesService: MessagesService
  ) { }

  ngOnInit() {
    this.currentWeather = this.currentWeatherService.get();
    if (!this.currentWeather) {
      this.router.navigateByUrl('');
    }
  }

  onSave() {
    console.log(this.commentText);
    this.comment = {
      city: this.currentWeather.name,
      message: this.commentText
    }
    this.messagesService.save(this.comment).subscribe(r => {
      if (r.ok === true) {
        this.router.navigateByUrl('');
      }
    });
  }

}
