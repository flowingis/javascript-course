import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[hotColdFeedback]'
})
export class HotColdFeedbackDirective implements OnChanges {

  @Input('hotColdFeedback') value

  constructor(private element: ElementRef) { }

  ngOnChanges() {
    if(this.value < 10){
      this.element.nativeElement.style.color = 'blue';
    }else if(this.value > 30){
      this.element.nativeElement.style.color = 'red';
    }else{
      this.element.nativeElement.style.color = 'black';
    }
  }

}
