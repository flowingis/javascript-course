import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent  {
  value;
  @Output() onSearch = new EventEmitter();

  constructor() { }

  onSearchClick() {
    this.onSearch.emit(this.value);
    this.value = '';
  }

}
