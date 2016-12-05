const anagrams = require('./code/anagrams');

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

    it('should exclude all the words with no valid anagrams', () => {
        const result = anagrams('catch a ride');

        const EXPECTATION = {
            ride:['dire','ired']
        };

        expect(result).toEqual(EXPECTATION);
    });
});