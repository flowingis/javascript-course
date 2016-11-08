"use strict"

var counter = {
    val:0
};

// after 3 seconds counter will increment by 1 and if it reach 10 will rejected esle will resolved
var increaseValByOneWithPromise = function(counter){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            counter.val++;
            if(counter.val < 10){
                resolve();
            }else{
                reject();
            }
        }, 3000);
    });
};

// each time we call test function counter will increment of 1 by our promise, 
// if promise will resolved we print Counter: counter else if is rejected Error: counter
var test = async function() {
    try {
        await increaseValByOneWithPromise(counter);
        
        console.log('Counter:', counter.val);
    } catch(e){
        console.log('Error:', counter.val);
    }
};

// test funciton is called every second
var interval = setInterval(() => {
    test();
}, 1000);

// every 4 seconds we print a log
var secondsCounter = setTimeout(() => {
    console.log("4 seconds are passed...");
}, 4000);

setTimeout(() => {
    clearInterval(interval);
}, 12000);