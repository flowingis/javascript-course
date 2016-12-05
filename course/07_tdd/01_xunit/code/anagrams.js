const fs = require('fs');
const path = require('path');

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

    if(typeof phrase !== 'string'){
        throw new Error('please provide a string')
    }

    const dictionary = JSON.parse(fs.readFileSync(path.join(__dirname,'..','..','words.json')));

    let words = phrase.split(" ");

    if(opts.minLength){
       words = words.filter(word => word.length >= opts.minLength);
    }

    const toReturn = {};

    words.forEach(word => {
        const combinations = findCombinations(word);

        const validCombinations = combinations.filter(combination => dictionary.includes(combination) && word !== combination);

        if(validCombinations.length){
            validCombinations.sort();
            toReturn[word] = validCombinations;
        }
    });

    return toReturn;
};