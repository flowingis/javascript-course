import { WheaterService } from './services/wheater.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PanelModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { KelvinToCelsiusPipe } from './pipes/kelvin-to-celsius.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherIconComponent,
    KelvinToCelsiusPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelModule
  ],
  providers: [
    WheaterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
