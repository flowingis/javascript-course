import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius'
})
export class KelvinToCelsiusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const temperatura = parseFloat(value);
    let toReturn;
    if (isNaN(temperatura)) {
      toReturn = null;
    } else {
      toReturn = value - 273.15;
    }
    return toReturn;
  }

}
