import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  public current(city: string) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},it&appid=6152ce2448b9ff36ff800903fb84d3f2`;
    return this.http.get(url).map(res => res.json());
  }

}
