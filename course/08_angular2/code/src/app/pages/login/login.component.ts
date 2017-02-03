import { CurrentUserService } from '../../services/current-user.service';
import { LoginService } from '../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public error: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private currentUserService: CurrentUserService
  ) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }

  onLogin() {
    const user = {
      username: this.username,
      password: this.password
    }
    this.loginService.login(user).subscribe(res => {
      if(res.ok === true) {
        this.currentUserService.set(user.username);
        this.router.navigateByUrl('');
      }
    }, res => {
      this.error = "Username o password errati";
    });
  }

}
