console.log('Using This');
console.log('................\n');
var thisFunction = function(message){
    console.log(message);

    if(!this.count){
        this.count = 0;
    }
    this.count++;
};

thisFunction('first');
thisFunction('second');
thisFunction('third');


//WAT?
console.log(thisFunction.count);

console.log('\nUsing Scope');
console.log('................\n');
/*
    Una prima soluzione è quella di utilizzare il meccanismo degli scope annidati,
    portando fuori dalla funzione la variabile 'count'.
 */
var count;
var notThisFunction = function(message){
    console.log("not " + message);

    if(!count){
        count = 0;
    }
    count++;
};

notThisFunction('first');
notThisFunction('second');
notThisFunction('third');

console.log(count);

console.log('\nUsing Scope (in an another way)');
console.log('................\n');

var notThisAganinFunction = function(message){
    console.log("not this again " +  message);

    if(!notThisAganinFunction.count){
        notThisAganinFunction.count = 0;
    }
    notThisAganinFunction.count++;
};

notThisAganinFunction('first');
notThisAganinFunction('second');
notThisAganinFunction('third');

console.log(notThisAganinFunction.count);

