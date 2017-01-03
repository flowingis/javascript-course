import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { CurrentUserService } from './current-user.service';

@Injectable()
export class LoggedInGuardService implements CanActivate{

  constructor(private router: Router, private currentUserService: CurrentUserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(!this.currentUserService.get()){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
