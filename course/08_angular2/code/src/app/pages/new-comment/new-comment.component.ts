import { CurrentUserService } from './../../services/current-user.service';
import { CommentsService } from './../../services/comments.service';
import { LastWeatherInfoService } from './../../services/last-weather-info.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html'
})
export class NewCommentComponent implements OnInit {
  private lastWeatherInfo;
  message;
  reactions;
  form;

  constructor(
    private currentUserService: CurrentUserService,
    private lastWeatherInfoService: LastWeatherInfoService,
    private commentsService: CommentsService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.reactions = [
      'Happy',
      'Sad',
      'Angry'
    ];

    const dateValidator = (control: FormControl) => {
      if (!moment(control.value).isSameOrAfter(new Date(), 'day')) {
        return { invalidDate: true };
      }
    }

    this.form = this.formBuilder.group({
      reaction: [this.reactions[0]],
      message: ['', Validators.required],
      date: [new Date(), Validators.compose([Validators.required, dateValidator])]
    });
  }

  ngOnInit() {
    this.lastWeatherInfo = this.lastWeatherInfoService.get();
    if (!this.lastWeatherInfo) {
      this.router.navigate(['/']);
    }
  }

  onSave() {
    if (this.form.valid) {
      const comment = {
        message: this.form.controls.message.value,
        city: this.lastWeatherInfo.name,
        username: this.currentUserService.get(),
        date: moment(this.form.controls.date.value).format(),
        reaction: this.form.controls.reaction.value
      };

      this.commentsService.add(comment).subscribe((r) => {
        this.router.navigate(['/']);
      })
    }
  }

}
