import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';

const OTHER_CITIES = ['London', 'Paris', 'Beijing', 'New York', 'Melbourne'];

@Injectable()
export class WeatherService {

  constructor(private http: Http) {
      
  }

  current(city) {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},it&appid=6152ce2448b9ff36ff800903fb84d3f2`;
    return this.http.get(URL).map(response => response.json());
  }

  temperatures(city) {
    let toReturn = this.current(city);

    const otherObservables = OTHER_CITIES.map(c => this.current(c));

    toReturn = toReturn.zip(...otherObservables);

    return toReturn.map(values => {
      return values.map(value => {
        return {
          name:value.name,
          min:value.main.temp_min,
          max:value.main.temp_max
        }
      })
    });
  }

}
