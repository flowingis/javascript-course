import { WheaterService } from './services/wheater.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  results;
  loading = false;
  constructor(private wheaterService: WheaterService) {}

  onSearch(value) {
    this.loading = true;
    this.wheaterService.current(value).subscribe(results => {
      this.loading = false;
      this.results = results;
    })
  }
}
