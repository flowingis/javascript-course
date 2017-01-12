import { CommentsService } from './services/comments.service';
import { WheaterService } from './services/wheater.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/zip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  wheaterInfo;
  comments = [];
  loading = false;
  constructor(private wheaterService: WheaterService, private commentsService: CommentsService) { }

  onSearch(value) {
    if (value) {
      this.loading = true;

      const myObsevarble = this.wheaterService.current(value).zip(this.commentsService.list(value));

      myObsevarble.subscribe(results => {
        this.loading = false;
        this.wheaterInfo = results[0];
        this.comments = results[1];
      })
    }
  }
}
