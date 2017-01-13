import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromKelvinToCelsius'
})
export class FromKelvinToCelsiusPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let toReturn = parseFloat(value);
    if (isNaN(toReturn)) {
      toReturn = null;
    } else {
      toReturn -= 273.15;
    }
    return toReturn;
  }

}
