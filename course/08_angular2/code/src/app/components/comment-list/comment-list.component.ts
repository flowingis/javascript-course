import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html'
})
export class CommentListComponent implements OnChanges {

  @Input() comments = [];

  ngOnChanges() {
    if(!this.comments){
      this.comments = [];
    }
  }

}
