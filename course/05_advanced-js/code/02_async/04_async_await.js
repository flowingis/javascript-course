"use strict"

var counter = {
    val:0
};

var increaseValByOneWithPromise = function(counter){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            counter.val++;
            resolve();
        }, 3000);
    });
};

var test = async function() {
    try {
        await increaseValByOneWithPromise(counter);
        
        console.log('Counter:', counter.val);
    } catch(e){
        
    }
};

var interval = setInterval(() => {
    test();
}, 1000);

var secondsCounter = setInterval(() => {
    console.log("4 second passed...");
}, 4000);

setTimeout(() => {
    clearInterval(interval);
    clearInterval(secondsCounter);
}, 12000);