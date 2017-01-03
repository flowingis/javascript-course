import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class CommentsService {

  constructor(private http: Http) {
      
  }

  list(city) {
    const URL = `/api/comments/${city}`;
    return this.http.get(URL).map(response => response.json());
  }

  add(comment) {
    const URL = 'api/comments';
    return this.http.post(URL, comment);
  }

}
