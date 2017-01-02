import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {
  @Output() onSearch = new EventEmitter();
  value = '';

  onClick(){
    this.onSearch.emit(this.value);
    this.value = ''
  }

}
