import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(username, password) {
    const URL = 'api/login';
    return this.http.post(URL, {username, password});
  }

}
