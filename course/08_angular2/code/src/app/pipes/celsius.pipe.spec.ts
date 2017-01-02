/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CelsiusPipe } from './celsius.pipe';

describe('CelsiusPipe', () => {
  it('create an instance', () => {
    let pipe = new CelsiusPipe();
    expect(pipe).toBeTruthy();
  });

  it('should convert the kelvin value into a celsius one', () => {
    let pipe = new CelsiusPipe();
    expect(pipe.transform(273.15)).toBe(0);
    expect(pipe.transform(0)).toBe(-273.15);
  });
  

  it('should return zero if the param is not a number', () => {
    let pipe = new CelsiusPipe();
    expect(pipe.transform('value')).toBe(0);
  });
});
