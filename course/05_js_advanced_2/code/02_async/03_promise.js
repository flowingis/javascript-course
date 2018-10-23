"use strict"

const counterForCallback = {
    val1: 0,
    val2: 0
};

const increaseVal1ByOneWithCallback = (counter, callback) => {
    setTimeout(() => {
        counter.val1++;
        if(callback) { callback(); }
    }, 3000);
};

const increaseVal2ByValueWithCallback = (counter, val, callback) => {
    setTimeout(() => {
        counter.val2+=val;
        if(callback) { callback(); }
    }, 1500);
};

const getCounterPlusValue = (counter, value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sum = counter + value;
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
const chainWithoutError = (callback) => {
    console.log("CHAIN WITHOUT ERROR\n");
    getCounterPlusValue(0, 1).then((counter) => {
        console.log("NO ERROR: getCounterPlusValue from 0 with 1 -> "+counter+"\n");

        return getCounterPlusValue(counter, 10);
    }).then((counter) => {
        console.log("NO ERROR: getCounterPlusValue from 1 with 10 -> "+counter+"\n");

        return getCounterPlusValue(counter, 10);
    }).then((counter) => {
        console.log("NO ERROR: getCounterPlusValue from 11 with 10 -> "+counter+"\n");

        return getCounterPlusValue(counter, 10);
    }).then((counter) => {
        console.log("NO ERROR: getCounterPlusValue from 21 with 10 -> "+counter+"\n");
    }).catch((e) => {
        console.log("will no pass here: NO ERROR");
    }).then(() => {
        console.log("finally anyway here\n");
        console.log("/CHAIN WITHOUT ERROR\n");
        callback();
    });
};

// in promise chain with managed error all call is execute the .then of the one who go in error will use second function to manage error
const chainWithManagedError = (callback) => {
    console.log("CHAIN WITH MANAGED ERROR\n");
    getCounterPlusValue(0, 1).then((counter) => {
        console.log("getCounterPlusValue from 0 with 1 -> "+counter+"\n");

        return getCounterPlusValue(counter, 10);
    }).then((counter) => {
        console.log("getCounterPlusValue from 1 with 10 -> "+counter+"\n");

        return getCounterPlusValue(counter, 20);
    }).then((counter) => {
        console.log("getCounterPlusValue from 21 with 20 -> "+counter+"\n");

        return getCounterPlusValue(counter, 80);
    }).then((counter) => {
            console.log("getCounterPlusValue from 41 with 80 -> "+counter+"\n");
            return getCounterPlusValue(counter, 10);
        }, (e) => {
            console.log(e.counter+" + "+e.value+" = "+e.sum+"\n");
            Promise.reject();
        }
    ).then((counter) => {
        console.log("getCounterPlusValue from 121 with 10 -> "+counter+"\n");
    }).catch((e) => {
        console.log("Managed error is not catched\n"); 
    }).then(() => {
        console.log("finally here\n");
        console.log("/CHAIN WITH MANAGED ERROR\n");
        callback();
    });
};

// in promise with unmamaged error the chain is stop at the call who return error and result of reject can be catched
const chainWithUnmanagedError = (callback) => {
    console.log("CHAIN WITH UNMANAGED ERROR\n");
    getCounterPlusValue(0, 1).then((counter) => {
        console.log("getCounterPlusValue from 0 with 1 -> "+counter+"\n");

        return getCounterPlusValue(counter, 10);
    }).then((counter) => {
        console.log("getCounterPlusValue from 1 with 10 -> "+counter+"\n");

        return getCounterPlusValue(counter, 20);
    }).then((counter) => {
        console.log("getCounterPlusValue from 21 with 20 -> "+counter+"\n");
        // this call will cause error
        return getCounterPlusValue(counter, 80);
    }).then((counter) => {
        console.log("getCounterPlusValue from 41 with 80 -> "+counter+"\n");

        return getCounterPlusValue(counter, 10);
    }).then((counter) => {
        console.log("getCounterPlusValue from 121 with 10 -> "+counter+"\n");
    }).catch((e) => {
        console.log("Unmanaged error is catched: "+JSON.stringify(e)+"\n"); 
    }).then(() => {
        console.log("finally here\n");
        console.log("/CHAIN WITH UNMANAGED ERROR\n");
        callback();
    });
};

// this is an example of pyramid of doom with callbacks
const callbackChain = (callback) => {
    console.log("CALLBACK CHAIN\n");
    increaseVal1ByOneWithCallback(counterForCallback, () => {
        console.log(JSON.stringify("Callback -> val1+1: "+JSON.stringify(counterForCallback))+"\n");
        
        increaseVal2ByValueWithCallback(counterForCallback, 10, () => {
            console.log(JSON.stringify("Callback -> val2+10: "+JSON.stringify(counterForCallback))+"\n");
            
            increaseVal2ByValueWithCallback(counterForCallback, 11, () => {
                console.log(JSON.stringify("Callback -> val2+11: "+JSON.stringify(counterForCallback))+"\n");
                
                increaseVal2ByValueWithCallback(counterForCallback, 100, () => {
                    console.log(JSON.stringify("Callback -> val2+100: "+JSON.stringify(counterForCallback))+"\n");
                    console.log("/CALLBACK CHAIN\n");
                    callback();
                });
            });
        });
    });
};

const standAloneCall1 = (n) => {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Call1: "+n);
        }, 1000);
    });
};

const standAloneCall2 = (n) => {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Call2: "+n);
        }, 2000);
    });
};

const standAloneCall3 = (n) => {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Call3: "+n);
        }, 1000);
    });
};

const promiseAll = () => {
    console.log("PROMISE ALL\n");
    Promise.all([standAloneCall1(1), standAloneCall2(2), standAloneCall3(3)]).then(value => { 
        console.log(value[0]+"\n");
        console.log(value[1]+"\n");
        console.log(value[2]+"\n");
        console.log("/PROMISE ALL\n");
    });
};

callbackChain(() => {
    chainWithManagedError(() => {
        chainWithUnmanagedError(() => {
            chainWithoutError(promiseAll);  
        });
    });
});