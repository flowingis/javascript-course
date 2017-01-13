import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CitiesService {

  constructor(private http: Http) { }

  public list() {
    const url = 'api/cities';
    return this.http.get(url).map(res => res.json().map(item => item.name));
  }

}
