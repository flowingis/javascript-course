import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class CommentsService {

  constructor(private http: Http) { }

  list(city: string) {
    const URL = `http://localhost:3000/api/comments/${city.toLowerCase()}`;
    return this.http.get(URL).map(res => res.json());
  }

}
