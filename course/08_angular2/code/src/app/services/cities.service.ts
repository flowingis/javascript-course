import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CitiesService {

  constructor(private http: Http) {
      
  }

  list() {
    return this.http.get('/api/cities/').map(response => response.json());
  }

  nearest() {

     return new Observable(observer => {
            navigator.geolocation.getCurrentPosition((position) => {
              observer.next(position.coords);
            });
      }).mergeMap((coords:any) => {

        const GEOCODING_URL = `http://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}&addressdetails=1`;

        return this.http.get(GEOCODING_URL)
          .map(response => response.json())
          .map(response => response.address.city);
      })
  }

}
