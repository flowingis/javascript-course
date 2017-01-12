import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class WheaterService {

  constructor(private http: Http) { }

  current(city = 'bologna') {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},it&appid=6152ce2448b9ff36ff800903fb84d3f2`;
    return this.http.get(URL).map(res => res.json());
  }

}
