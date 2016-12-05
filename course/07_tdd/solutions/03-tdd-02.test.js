const {permutations, splitter, wordValidator} = require('./code/anagrams');

describe('anagrams', () => {
    describe('permutations', () => {
        it('should return an empty array if you provide a word with a single character', () => {
            expect(permutations('a')).toEqual([]);
        });

        it('should return an array with the inverse value if you provide a word with two characters', () => {
            expect(permutations('it')).toEqual(['ti']);
        });

        it('should return an array with two values with same characters if you provide a word with three characters ', () => {
            expect(permutations('the').sort()).toEqual(['teh', 'eht', 'eth', 'het', 'hte'].sort());
        });

        it('should return an array sorted alphabetically', () => {
            expect(permutations('the')).toEqual(['teh', 'eht', 'eth', 'het', 'hte'].sort());
        });

        it('should remove duplicated values', () => {
            expect(permutations('tht')).toEqual(['tth', 'htt'].sort());
        });

        //Non regressione

        it('should return all the permutations, sorted alphabetically', () => {
            const result = permutations('abcd');

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
    });

    describe('splitter', () => {
        it('should wrap a word in an array', () => {
            expect(splitter('test')).toEqual(['test']);
        });

        it('should split a phrase in an array', () => {
            const EXPECTATION = ['this', 'is', 'a', 'phrase'];
            const PHRASE = 'this is a phrase';
            expect(splitter(PHRASE)).toEqual(EXPECTATION);
        });

        it('should split a phrase in an array, with a custom separator', () => {
            expect(splitter('this is a phrase')).toEqual(splitter('this;is;a;phrase',{separator:';'}));
        });

        it('should skip the words shorter than a minLenght if provided', () => {
            expect(splitter('this is a phrase',{minLength:4})).toEqual(['this','phrase']);
        });

        it('should skip the words longer than a maxLenght if provided', () => {
            expect(splitter('this is a phrase',{maxLength:4})).toEqual(['this','is','a']);
        });
    });

    describe('wordValidator', () => {
        it('should return true if the word is in the dictionary', () => {
            const DICTIONARY = ['word'];
            expect(wordValidator('word',DICTIONARY)).toBe(true);
        });

        it('should return false if the word is not in the dictionary', () => {
            const DICTIONARY = ['word'];
            expect(wordValidator('phrase',DICTIONARY)).toBe(false);
        });

        it('should return false if the word is in the blacklist', () => {
            const DICTIONARY = ['word','phrase'];
            const BLACKLIST = ['phrase'];
            expect(wordValidator('phrase',DICTIONARY,BLACKLIST)).toBe(false);
        })
    })
});