import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html'
})
export class CommentListComponent implements OnInit {

  @Input() value
  constructor() { }

  ngOnInit() {
  }

}
