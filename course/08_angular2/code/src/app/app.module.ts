import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PanelModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherIconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
