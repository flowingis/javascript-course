const { combinations } = require('./code/anagrams');

describe('anagrams',() => {
    describe('combinations',() => {
        it('should return an empty array if you provide a word with a single character',() => {
            expect(combinations('a')).toEqual([]);
        });

        it('should return an array with the inverse value if you provide a word with two characters',() => {
            expect(combinations('it')).toEqual(['ti']);
        });

        it('should return an array with two values with same characters if you provide a word with three characters ',() => {
            expect(combinations('the')).toEqual(['teh','het','eth']);
        });
    })
});