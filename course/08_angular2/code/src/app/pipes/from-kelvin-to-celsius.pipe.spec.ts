/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FromKelvinToCelsiusPipe } from './from-kelvin-to-celsius.pipe';

describe('FromKelvinToCelsiusPipe', () => {
  it('create an instance', () => {
    let pipe = new FromKelvinToCelsiusPipe();
    expect(pipe).toBeTruthy();
  });

  it('converte i gradi kenvin in celsius', () => {
    let pipe = new FromKelvinToCelsiusPipe();
    expect(pipe.transform(273.15)).toBe(0);
  });

  it('restituisce null se l\'input non è un numero', () => {
    let pipe = new FromKelvinToCelsiusPipe();
    expect(pipe.transform('ciao')).toBe(null);
  });
});
