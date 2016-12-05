const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const findPermutations = (word) => {
    const words = [];

    const executeFindPermutations = (prefix, str) => {
        if (str.length === 1) {
            words.push(prefix + str);
        } else {
            const chars = str.split("");

            chars.forEach(function(char, index) {
                const stringWithoutChar = str.substring(0, index) + str.substring(index + 1);
                executeFindPermutations(prefix + char, stringWithoutChar);
            });
        }
    };

    executeFindPermutations('', word);

    return words;
};

module.exports = (phrase, opts = {}) => {
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

        words = phrase.split(opts.separator || " ");
    }


    const dictionary = JSON.parse(fs.readFileSync(path.join(__dirname,'..','..','words.json')));

    if(opts.minLength){
       words = words.filter(word => word.length >= opts.minLength);
    }

    if(opts.maxLength){
        words = words.filter(word => word.length <= opts.maxLength);
    }

    const toReturn = {};

    words.forEach(word => {
        const permutations = findPermutations(word);

        let validPermutations = permutations.filter(combination => {
            let isValid = dictionary.includes(combination) && word !== combination;

            if(isValid && opts.blacklist){
                return !opts.blacklist.includes(combination);
            }

            return isValid;
        });

        if(validPermutations.length){

            if(validPermutations.length > 1){
                validPermutations = _.uniq(validPermutations);
            }


            validPermutations.sort();
            toReturn[word] = validPermutations;
        }
    });

    return toReturn;
};