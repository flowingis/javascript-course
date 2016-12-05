const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const findCombinations = (word) => {
    const words = [];

    const executeFindCombinations = (prefix, str) => {
        if (str.length === 1) {
            words.push(prefix + str);
        } else {
            const chars = str.split("");

            chars.forEach(function(char, index) {
                const stringWithoutChar = str.substring(0, index) + str.substring(index + 1);
                executeFindCombinations(prefix + char, stringWithoutChar);
            });
        }
    };

    executeFindCombinations('', word);

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
        const combinations = findCombinations(word);

        let validCombinations = combinations.filter(combination => {
            let isValid = dictionary.includes(combination) && word !== combination;

            if(isValid && opts.blacklist){
                return !opts.blacklist.includes(combination);
            }

            return isValid;
        });

        if(validCombinations.length){

            if(validCombinations.length > 1){
                validCombinations = _.uniq(validCombinations);
            }


            validCombinations.sort();
            toReturn[word] = validCombinations;
        }
    });

    return toReturn;
};