import { CitiesService } from '../../services/cities.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter();
  public searchText;
  public results;
  private cities: string[];
  constructor(private citiesService: CitiesService) { }

  public search() {
    this.onSearch.emit(this.searchText);
    this.searchText = '';
  }

  filter(event) {

    this.results = this.cities.filter((city) => {
      return city.includes(event.query);
    });

  }

  ngOnInit() {
    this.results = [];
    this.citiesService.list().subscribe(res => {
      this.cities = res;
    });
  }

}
