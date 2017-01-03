import { Injectable } from '@angular/core';

const KEY = 'LastWeatherInfo';

@Injectable()
export class LastWeatherInfoService {

  constructor() { }

  get() {
    const value = window.sessionStorage.getItem(KEY);
    if(value) {
      return JSON.parse(value);
    }
  }

  set(lastWeatherInfo) {
    if(lastWeatherInfo){
      window.sessionStorage.setItem(KEY, JSON.stringify(lastWeatherInfo));  
    }
  }

}
