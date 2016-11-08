"use strict"

var counterForCallback = {
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


var getCounterPlusValue = function(counter, value){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            var sum = counter + value;
            if(sum <= 100){
                resolve(sum);
            }else{
                reject({
                    counter: counter,
                    value: value,
                    sum: sum
                });
            }
        }, 1500);
    });  
};

// in promise chain with no error all call is execute
var chainWithoutError = function(callback){
    console.log("CHAIN WITHOUT ERROR\n");
    getCounterPlusValue(0, 1).then(function(counter){
        console.log("NO ERROR: getCounterPlusValue from 0 with 1 -> "+counter+"\n");

        return getCounterPlusValue(counter, 10);
    }).then(function(counter){
        console.log("NO ERROR: getCounterPlusValue from 1 with 10 -> "+counter+"\n");

        return getCounterPlusValue(counter, 10);
    }).then(function(counter){
        console.log("NO ERROR: getCounterPlusValue from 11 with 10 -> "+counter+"\n");

        return getCounterPlusValue(counter, 10);
    }).then(function(counter){
        console.log("NO ERROR: getCounterPlusValue from 21 with 10 -> "+counter+"\n");
    }).catch(function(e){
        console.log("will no pass here: NO ERROR");
    }).then(function(){
        console.log("finally anyway here\n");
        console.log("/CHAIN WITHOUT ERROR\n");
        callback();
    });
};

// in promise chain with managed error all call is execute the .then of the one who go in error will use second function to manage error
var chainWithManagedError = function(callback){
    console.log("CHAIN WITH MANAGED ERROR\n");
    getCounterPlusValue(0, 1).then(function(counter){
        console.log("getCounterPlusValue from 0 with 1 -> "+counter+"\n");

        return getCounterPlusValue(counter, 10);
    }).then(function(counter){
        console.log("getCounterPlusValue from 1 with 10 -> "+counter+"\n");

        return getCounterPlusValue(counter, 20);
    }).then(function(counter){
        console.log("getCounterPlusValue from 21 with 20 -> "+counter+"\n");

        return getCounterPlusValue(counter, 80);
    }).then(
        function(counter){
            console.log("getCounterPlusValue from 41 with 80 -> "+counter+"\n");
            return getCounterPlusValue(counter, 10);
        }, function(e){
            console.log(e.counter+" + "+e.value+" = "+e.sum+"\n");
            Promise.reject();
        }
    ).then(function(counter){
        console.log("getCounterPlusValue from 121 with 10 -> "+counter+"\n");
    }).catch(function(e){
        console.log("Managed error is not catched\n"); 
    }).then(function(){
        console.log("finally here\n");
        console.log("/CHAIN WITH MANAGED ERROR\n");
        callback();
    });
};

// in promise with unmamaged error the chain is stop at the call who return error and result of reject can be catched
var chainWithUnmanagedError = function(callback){
    console.log("CHAIN WITH UNMANAGED ERROR\n");
    getCounterPlusValue(0, 1).then(function(counter){
        console.log("getCounterPlusValue from 0 with 1 -> "+counter+"\n");

        return getCounterPlusValue(counter, 10);
    }).then(function(counter){
        console.log("getCounterPlusValue from 1 with 10 -> "+counter+"\n");

        return getCounterPlusValue(counter, 20);
    }).then(function(counter){
        console.log("getCounterPlusValue from 21 with 20 -> "+counter+"\n");
        // this call will cause error
        return getCounterPlusValue(counter, 80);
    }).then(function(counter){
        console.log("getCounterPlusValue from 41 with 80 -> "+counter+"\n");

        return getCounterPlusValue(counter, 10);
    }).then(function(counter){
        console.log("getCounterPlusValue from 121 with 10 -> "+counter+"\n");
    }).catch(function(e){
        console.log("Unmanaged error is catched: "+JSON.stringify(e)+"\n"); 
    }).then(function(){
        console.log("finally here\n");
        console.log("/CHAIN WITH UNMANAGED ERROR\n");
        callback();
    });
};

// this is an example of pyramid of doom with callbacks
var callbackChain = function(callback){
    console.log("CALLBACK CHAIN\n");
    increaseVal1ByOneWithCallback(counterForCallback, function(){
        console.log(JSON.stringify("Callback -> val1+1: "+JSON.stringify(counterForCallback))+"\n");
        
        increaseVal2ByValueWithCallback(counterForCallback, 10, function(){
            console.log(JSON.stringify("Callback -> val2+10: "+JSON.stringify(counterForCallback))+"\n");
            
            increaseVal2ByValueWithCallback(counterForCallback, 11, function(){
                console.log(JSON.stringify("Callback -> val2+11: "+JSON.stringify(counterForCallback))+"\n");
                
                increaseVal2ByValueWithCallback(counterForCallback, 100, function(){
                    console.log(JSON.stringify("Callback -> val2+100: "+JSON.stringify(counterForCallback))+"\n");
                    console.log("/CALLBACK CHAIN\n");
                    callback();
                });
            });
        });
    });
};

var standAloneCall1 = function(n){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Call1: "+n);
        }, 1000);
    });
};

var standAloneCall2 = function(n){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Call2: "+n);
        }, 2000);
    });
};

var standAloneCall3 = function(n){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Call3: "+n);
        }, 1000);
    });
};

var promiseAll = function(){
    console.log("PROMISE ALL\n");
    Promise.all([standAloneCall1(1), standAloneCall2(2), standAloneCall3(3)]).then(value => { 
        console.log(value[0]+"\n");
        console.log(value[1]+"\n");
        console.log(value[2]+"\n");
        console.log("/PROMISE ALL\n");
    });
};

callbackChain(function(){
    chainWithManagedError(function(){
        chainWithUnmanagedError(function(){
            chainWithoutError(promiseAll);  
        });
    });
});