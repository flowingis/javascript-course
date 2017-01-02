import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PanelModule, InputTextModule, ButtonModule, DataListModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { CommentsService } from './services/comments.service';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherIconComponent,
    SearchBarComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    DataListModule
  ],
  providers: [
    WeatherService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
