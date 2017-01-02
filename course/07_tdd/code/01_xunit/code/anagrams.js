var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var findPermutations = (word) => {
    var words = [];

    const executeFindPermutations = function(prefix, str) {
        if (str.length === 1) {
            words.push(prefix + str);
        } else {
            const chars = str.split("");

            _.each(chars,function(char, index) {
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

    var words;

    if(_.isArray(phrase)){
        words = phrase;
    }else{
        if(typeof phrase !== 'string'){
            throw new Error('please provide a string')
        }

        words = phrase.split(opts.separator || " ");
    }


    var dictionary = JSON.parse(fs.readFileSync(path.join(__dirname,'..','..','words.json')));

    if(opts.minLength){
       words = words.filter(word => word.length >= opts.minLength);
    }

    if(opts.maxLength){
        words = _.filter(words, word => word.length <= opts.maxLength);
    }

    var toReturn = {};

    _.each(words, word => {
        var permutations = findPermutations(word);

        var validPermutations = permutations.filter(combination => {
            var isValid = _.includes(dictionary, combination) && word !== combination;

            if(isValid && opts.blacklist){
                return !_.includes(opts.blacklist, combination);
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