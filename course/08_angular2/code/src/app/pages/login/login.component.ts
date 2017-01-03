import { CurrentUserService } from './../../services/current-user.service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  username;
  password;

  constructor(
    private currentUserService: CurrentUserService,
    private loginService: LoginService, 
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    if(this.username && this.password){
      this.loginService.login(this.username, this.password).subscribe(r => {
        if(r.ok){
          this.currentUserService.set(this.username)
          this.router.navigate(['/']);
        }
      })
    }
  }

}
