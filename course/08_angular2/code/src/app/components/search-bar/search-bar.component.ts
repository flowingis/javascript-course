import { Component, Output, EventEmitter } from '@angular/core';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {
  @Output() onSearch = new EventEmitter();
  value = '';
  cities = [];
  filteredCities = [];

  constructor(private citiesService: CitiesService) {
    citiesService.list().map(cities => cities.map(city => city.name)).subscribe(cities => {
      this.cities = cities
    })
  }

  completeCity(event){
    this.filteredCities = this.cities.filter(city => {
      return city.toLowerCase().indexOf(event.query.toLowerCase()) != -1;
    });
  }

  search(query){
    this.onSearch.emit(query);
    this.value = ''
  }

}
