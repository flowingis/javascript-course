const { permutations } = require('./code/anagrams');

describe('anagrams',() => {
    describe('permutations',() => {
        it('should return an empty array if you provide a word with a single character',() => {
            expect(combinations('a')).toEqual([]);
        });

        it('should return an array with the inverse value if you provide a word with two characters',() => {
            expect(combinations('it')).toEqual(['ti']);
        });

        it('should return an array with two values with same characters if you provide a word with three characters ',() => {
            expect(combinations('the').sort()).toEqual(['teh','eht','eth','het','hte'].sort());
        });

        it('should return an array sorted alphabetically',() => {
            expect(combinations('the')).toEqual(['teh','eht','eth','het','hte'].sort());
        });

        //Non regressione

        it('should return all the permutations, sorted alphabetically',() => {
           const result = combinations('abcd');

           const EXPECTATION = [
               'abdc',
               'acbd',
               'acdb',
               'adbc',
               'adcb',
               'badc',
               'bacd',
               'bcda',
               'bcad',
               'bdca',
               'bdac',
               'cabd',
               'cadb',
               'cbad',
               'cbda',
               'cdab',
               'cdba',
               'dacb',
               'dabc',
               'dbca',
               'dbac',
               'dcba',
               'dcab'
           ].sort();

           expect(result).toEqual(EXPECTATION);
        });
    })
});