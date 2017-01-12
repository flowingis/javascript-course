import { WheaterService } from './services/wheater.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  results;
  
  constructor(private wheaterService: WheaterService) {}

  ngOnInit() {
    this.wheaterService.current().subscribe(results => {
      this.results = results;
    })
  }
}
