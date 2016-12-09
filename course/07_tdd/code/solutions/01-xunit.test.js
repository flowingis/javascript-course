const anagrams = require('./../01_xunit/code/anagrams');

describe('anagrams', () => {
    it('should find all the valid anagrams of a word', () => {
        const result = anagrams('dog');

        const EXPECTATION = {
            dog:['god']
        };

        expect(result).toEqual(EXPECTATION);
    });

    it('should find all the valid anagrams for any word in a phrase', () => {
        const result = anagrams('right side');

        const EXPECTATION = {
            right:['girth','grith'],
            side:['dies','ides']
        };

        expect(result).toEqual(EXPECTATION);
    });

    it('should throw if no value is passed as parameter', () => {
        expect(() => {
            anagrams()
        }).toThrow();
    });

    it('should throw if the parameter it\'s not a string', () => {
        expect(() => {
            anagrams(1);
            anagrams(true);
        }).toThrow();
    });

    it('should exclude all the words with a length smaller than minLenght opt', () => {
        const result = anagrams('the right side', {minLength:4});

        const EXPECTATION = {
            right:['girth','grith'],
            side:['dies','ides']
        };

        expect(result).toEqual(EXPECTATION);
    });

    it('should exclude all the words with a length smaller than maxLenght opt', () => {
        const result = anagrams('the right side', {maxLength:4});

        const EXPECTATION = {
            the:['eth','het'],
            side:['dies','ides']
        };

        expect(result).toEqual(EXPECTATION);
    });

    it('should exclude all the words with no valid anagrams', () => {
        const result = anagrams('catch a ride');

        const EXPECTATION = {
            ride:['dire','ired']
        };

        expect(result).toEqual(EXPECTATION);
    });

    it('should contain only unique values', () => {
        const result = anagrams('doom');

        const EXPECTATION = {
            doom:['mood']
        };

        expect(result).toEqual(EXPECTATION);
    });

    it('should exclude all the blacklist anagrams', () => {
        const result = anagrams('this is sparta', {blacklist:['shit']});

        const EXPECTATION = {
            is:['si'],
            sparta:['satrap'],
            'this':['hist','hits','sith']
        };

        expect(result).toEqual(EXPECTATION);
    });

    it('should manage a different separator than " "', () => {
        const result = anagrams('party-day', {separator:"-"});
        const result1 = anagrams('party day');

        expect(result).toEqual(result1);
    });

    it('should manage an array as input', () => {
        const result = anagrams(['party','day']);
        const result1 = anagrams('party day');

        expect(result).toEqual(result1);
    });

    it('should manage a complex options object', () => {
        const result = anagrams('this-is-sparta', {
            blacklist:['shit'],
            separator:['-'],
            minLength:3,
            maxLength:4
        });

        const EXPECTATION = {
            'this':['hist','hits','sith']
        };

        expect(result).toEqual(EXPECTATION);
    });
});