import { Injectable } from '@angular/core';

const KEY = 'CurrentUser';

@Injectable()
export class CurrentUserService {

  constructor() { }

  get() {
    const value = window.sessionStorage.getItem(KEY);
    if(value) {
      return JSON.parse(value);
    }
  }

  set(currentUser) {
    if(currentUser){
      window.sessionStorage.setItem(KEY, JSON.stringify(currentUser));  
    }
  }


}
