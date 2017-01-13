import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class MessagesService {

  constructor(private http: Http) { }

  public list(value) {
    const url = `api/comments/${value}`;
    return this.http.get(url).map(res => res.json());
  }

}
