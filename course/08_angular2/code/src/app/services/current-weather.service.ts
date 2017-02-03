import { Injectable } from '@angular/core';

const KEY="currentWeather";

const [OTHER_CITY] = ['London', 'Paris', 'Beijing', 'New York', 'Melbourne'];

@Injectable()
export class CurrentWeatherService {

  constructor() { }

  public get() {
    let toReturn = window.sessionStorage.getItem(KEY);
    toReturn = JSON.parse(toReturn);
    return Object.freeze(toReturn);
  }

  public set(value) {
    let toSave;
    if (value) {
      toSave = JSON.stringify(value);
      window.sessionStorage.setItem(KEY, toSave);
    }
  }

}
