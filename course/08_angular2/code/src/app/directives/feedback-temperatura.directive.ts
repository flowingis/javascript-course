import { Directive, Input, ElementRef, OnChanges } from '@angular/core';
import { FromKelvinToCelsiusPipe } from '../pipes/from-kelvin-to-celsius.pipe'

@Directive({
  selector: '[appFeedbackTemperatura]'
})
export class FeedbackTemperaturaDirective implements OnChanges{
  @Input() appFeedbackTemperatura;

  constructor(private element: ElementRef) {
  }

  ngOnChanges() {
    const pipe = new FromKelvinToCelsiusPipe();
    const value = pipe.transform(this.appFeedbackTemperatura);
    switch(true) {
      case value < 10:
        this.element.nativeElement.style.color = 'blue';
        break;
      case value > 20:
        this.element.nativeElement.style.color = 'red';
        break;
      default:
        this.element.nativeElement.style.color = 'black';
    }
  }

}
