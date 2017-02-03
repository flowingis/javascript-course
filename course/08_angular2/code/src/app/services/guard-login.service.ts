import { CurrentUserService } from './current-user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'

@Injectable()
export class GuardLoginService implements CanActivate{

  constructor(
    private currentUser: CurrentUserService,
    private router: Router
  ) { }

  canActivate() {
    if (!this.currentUser.get()) {
      this.router.navigateByUrl('login');
      return false;
    }
    return true
  }

}
