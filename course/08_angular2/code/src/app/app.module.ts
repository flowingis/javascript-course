import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { PanelModule, InputTextModule, ButtonModule, DataListModule, AutoCompleteModule } from 'primeng/primeng';

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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new-comment',
    component: NewCommentComponent
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
    NewCommentComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    DataListModule,
    AutoCompleteModule
  ],
  providers: [
    WeatherService,
    CommentsService,
    CitiesService,
    LastWeatherInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
