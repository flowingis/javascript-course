import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //°C = K − 273,15
    const kelvin = parseFloat(value);
    if(isNaN(kelvin)){
      return 0;
    }
    return kelvin - 273.15
  }

}
