import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(
    private http: Http
  ) { }

  login(user) {
    const URL = 'api/login';
    return this.http.post(URL, user).map(r => r.json());
  }

}
