/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { KelvinToCelsiusPipe } from './kelvin-to-celsius.pipe';

describe('KelvinToCelsiusPipe', () => {
  it('create an instance', () => {
    let pipe = new KelvinToCelsiusPipe();
    expect(pipe).toBeTruthy();
  });

  it('controlliamo la conversione', () => {
    let pipe = new KelvinToCelsiusPipe();
    expect(pipe.transform('273.15')).toBe(0);
  });

  it('controlliamo se l\'input è una stringa', () => {
    let pipe = new KelvinToCelsiusPipe();
    expect(pipe.transform('ciao')).toBe(null);
  });
});
