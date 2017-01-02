import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class CitiesService {

  constructor(private http: Http) {
      
  }

  list() {
    return this.http.get('/api/cities/').map(response => response.json());
  }

}
