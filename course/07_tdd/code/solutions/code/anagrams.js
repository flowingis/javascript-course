const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const findPermutations = (string) => {
    if(string.length === 1){
        return [string]
    }

    const chars = string.split('');

    if(chars.length === 2){
        return [string,chars[1]+chars[0]];
    }

    const toReturn = [];

    chars.forEach((c,i) => {
        const subString = string.substring(0, i) + string.substring(i + 1);
        const subPermutations = findPermutations(subString);
        subPermutations.forEach(sc => {
            toReturn.push(c + sc);
        })
    });

    return toReturn;

};

const permutations = (word) => {

    if(word.length <= 1){
        return [];
    }

    const chars = word.split('');

    if(word.length === 2){
        return [chars[1]+chars[0]];
    }

    return _.uniq(_.without(findPermutations(word),word)).sort();
};

const splitter = (phrase,opts = {}) => {
    let words = phrase.split(opts.separator || " ");

    if(opts.minLength){
        words = words.filter(word => word.length >= opts.minLength);
    }

    if(opts.maxLength){
        words = words.filter(word => word.length <= opts.maxLength);
    }

    return words;
};

const wordValidator = (word,dictionary, blacklist = []) => {
    return !blacklist.includes(word) && dictionary.includes(word);
};

const anagrams = (phrase, opts = {}) => {
    if(!phrase){
        throw new Error('please provide a phrase')
    }

    let words;

    if(_.isArray(phrase)){
        words = phrase;
    }else{
        if(typeof phrase !== 'string'){
            throw new Error('please provide a string')
        }

        words = splitter(phrase,opts)
    }

    const dictionary = JSON.parse(fs.readFileSync(path.join(__dirname,'..','..','words.json')));

    const toReturn = {};

    words.forEach(word => {
        const permutations = permutations(word);

        let validPermutations = permutations.filter(permutation => {
            return wordValidator(permutation,dictionary,opts.blacklist);
        });

        if(validPermutations.length){
            toReturn[word] = validPermutations;
        }
    });

    return toReturn;
};

module.exports = {
    permutations,
    splitter,
    wordValidator,
    anagrams
};