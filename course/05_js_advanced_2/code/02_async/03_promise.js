"use strict"

var counterForCallback = {
    val1: 0,
    val2: 0
};

var counterForPromise = {
    val1: 0,
    val2: 0
};

var increaseVal1ByOneWithCallback = function(counter, callback){
    setTimeout(function(){
        counter.val1++;
        if(callback) { callback(); }
    }, 3000);
};

var increaseVal2ByValueWithCallback = function(counter, val, callback){
    setTimeout(function(){
        counter.val2+=val;
        if(callback) { callback(); }
    }, 1500);
};

var increaseVal1ByOneWithPromise = function(counter){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            counter.val1++;
                resolve();
        }, 3000);
    });
};

var increaseVal2ByValueWithPromise = function(counter, val){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            counter.val2+=val;
                if(counter.val2 >= 10){
                    resolve();
                }else{
                    reject();
                }
        }, 3000);
    });
};

increaseVal1ByOneWithCallback(counterForCallback, function(){
    console.log(JSON.stringify("Callback -> val1+1: "+JSON.stringify(counterForCallback)));
    
    increaseVal2ByValueWithCallback(counterForCallback, 10, function(){
        console.log(JSON.stringify("Callback -> val2+10: "+JSON.stringify(counterForCallback)));
        
        increaseVal2ByValueWithCallback(counterForCallback, 11, function(){
            console.log(JSON.stringify("Callback -> val2+11: "+JSON.stringify(counterForCallback)));
            
            increaseVal2ByValueWithCallback(counterForCallback, 100, function(){
                console.log(JSON.stringify("Callback -> val2+100: "+JSON.stringify(counterForCallback)));
            });
        });
    });
});

increaseVal1ByOneWithPromise(counterForPromise).then(function(){
    console.log(JSON.stringify("Promise -> val1+1: "+JSON.stringify(counterForPromise)));
    
    return increaseVal2ByValueWithPromise(counterForPromise, 10);
}).then(function(){
    console.log(JSON.stringify("Promise -> val2+10: "+JSON.stringify(counterForPromise)));

    return increaseVal2ByValueWithPromise(counterForPromise, 11);
}).then(function(){
    console.log(JSON.stringify("Promise -> val2+11: "+JSON.stringify(counterForPromise)));

    return increaseVal2ByValueWithPromise(counterForPromise, 100);
}).then(function(){
    console.log(JSON.stringify("Promise -> val2+100: "+JSON.stringify(counterForPromise)));
});