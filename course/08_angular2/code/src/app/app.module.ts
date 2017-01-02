import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PanelModule, InputTextModule, ButtonModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { CommentsService } from './services/comments.service';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherIconComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [
    WeatherService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
