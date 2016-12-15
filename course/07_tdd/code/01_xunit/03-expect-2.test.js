const _ = require('lodash');

const random = () => _.random(0, 5);

const noop = () => undefined;

const switchObject = (obj) => {
    const keys = _.keys(obj);
    const result = {};

    _.each(keys, key => {
        const value = obj[key];
        result[value] = key;
    });

    return result;
};

/*
   expect in realtà ha un API più complessa del semplice toBe.
   Potete fare asserzioni di vario tipo che vanno dall'esistenza fino al deepEqual
 */

describe('noop', () => {
    it('should return undefined', () => {
        const result = noop();

        expect(result).toBe(undefined);
        expect(result).toBeFalsy();
        expect(result).toBeUndefined();
        expect(result).not.toBeTruthy();
        expect(result).not.toBeDefined();
    })
});

describe('random', () => {
    it('should return a number between 0 and 5', () => {
        const result = random();

        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(5)
    })
});

describe('switchObject', () => {
   it('should switch keys and values for any object', () => {
       const TARGET = {
           name:'Francesco',
           surname:'Strazzullo'
       };

       const EXPECTATION = {
           Francesco:'name',
           Strazzullo:'surname'
       };

       const result = switchObject(TARGET);

       /*
            In questo caso non usiamo il toBe, in quanto sarebbe l'equivalente di scrivere target === EXPECATATION.
            Quello che a noi serve è un deep equal tra i due oggetti
        */
       expect(result).toEqual(EXPECTATION);
   })
});