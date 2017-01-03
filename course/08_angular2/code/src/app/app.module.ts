import { LoginService } from './services/login.service';
import { LoggedInGuardService } from './services/logged-in-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { PanelModule, InputTextModule, ButtonModule, DataListModule, AutoCompleteModule, TabViewModule, CalendarModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { CommentsService } from './services/comments.service';
import { CitiesService } from './services/cities.service';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CelsiusPipe } from './pipes/celsius.pipe';
import { HotColdFeedbackDirective } from './directives/hot-cold-feedback.directive';
import { HomeComponent } from './pages/home/home.component';
import { NewCommentComponent } from './pages/new-comment/new-comment.component';
import { LastWeatherInfoService } from './services/last-weather-info.service';
import { CurrentUserService } from './services/current-user.service';
import { LoginComponent } from './pages/login/login.component';
import { TemperaturesChartComponent } from './components/temperatures-chart/temperatures-chart.component';
import { SunPositionChartComponent } from './components/sun-position-chart/sun-position-chart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new-comment',
    component: NewCommentComponent,
    canActivate:[LoggedInGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherIconComponent,
    SearchBarComponent,
    CommentListComponent,
    CelsiusPipe,
    HotColdFeedbackDirective,
    HomeComponent,
    NewCommentComponent,
    LoginComponent,
    TemperaturesChartComponent,
    SunPositionChartComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    DataListModule,
    AutoCompleteModule,
    TabViewModule,
    CalendarModule
  ],
  providers: [
    WeatherService,
    CommentsService,
    CitiesService,
    LastWeatherInfoService,
    CurrentUserService,
    LoggedInGuardService,
    LoginService,
    CelsiusPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
