import { MessagesService } from './services/messages.service';
import { CitiesService } from './services/cities.service';
import { WeatherService } from './services/weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PanelModule, ButtonModule } from 'primeng/primeng';
import {InputTextModule, AutoCompleteModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { IconComponent } from './components/icon/icon.component';
import { SearchComponent } from './components/search/search.component';
import { FromKelvinToCelsiusPipe } from './pipes/from-kelvin-to-celsius.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    SearchComponent,
    FromKelvinToCelsiusPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    AutoCompleteModule
  ],
  providers: [WeatherService, CitiesService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
