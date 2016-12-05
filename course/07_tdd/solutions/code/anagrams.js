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

    return _.without(findPermutations(word),word).sort();
};

module.exports = {
    permutations
};