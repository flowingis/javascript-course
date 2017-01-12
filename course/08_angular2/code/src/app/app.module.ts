import { CommentsService } from './services/comments.service';
import { WheaterService } from './services/wheater.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PanelModule, InputTextModule, ButtonModule, DataTableModule, SharedModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { KelvinToCelsiusPipe } from './pipes/kelvin-to-celsius.pipe';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherIconComponent,
    KelvinToCelsiusPipe,
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
    DataTableModule,
    SharedModule
  ],
  providers: [
    WheaterService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
