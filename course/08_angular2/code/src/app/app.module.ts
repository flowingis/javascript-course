import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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

@NgModule({
  declarations: [
    AppComponent,
    WeatherIconComponent,
    SearchBarComponent,
    CommentListComponent,
    CelsiusPipe,
    HotColdFeedbackDirective
  ],
  imports: [
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
    CitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
