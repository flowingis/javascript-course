import { LoginService } from './services/login.service';
import { GuardLoginService } from './services/guard-login.service';
import { CurrentUserService } from './services/current-user.service';
import { CurrentWeatherService } from './services/current-weather.service';
import { HomeComponent } from './pages/home/home.component';
import { MessagesService } from './services/messages.service';
import { CitiesService } from './services/cities.service';
import { WeatherService } from './services/weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router'
import { PanelModule, ButtonModule } from 'primeng/primeng';
import {InputTextModule, AutoCompleteModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { IconComponent } from './components/icon/icon.component';
import { SearchComponent } from './components/search/search.component';
import { FromKelvinToCelsiusPipe } from './pipes/from-kelvin-to-celsius.pipe';
import { FeedbackTemperaturaDirective } from './directives/feedback-temperatura.directive';
import { AddCommentComponent } from './pages/add-comment/add-comment.component';
import { LoginComponent } from './pages/login/login.component';
import { ChartTemperatureComponent } from './components/chart-temperature/chart-temperature.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'add-comment',
  component: AddCommentComponent,
  canActivate: [GuardLoginService]
}, {
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IconComponent,
    SearchComponent,
    FromKelvinToCelsiusPipe,
    FeedbackTemperaturaDirective,
    AddCommentComponent,
    LoginComponent,
    ChartTemperatureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    WeatherService,
    CitiesService,
    MessagesService,
    CurrentWeatherService,
    CurrentUserService,
    GuardLoginService,
    LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
