"use strict"

const serviceResponse = {
    staticResponse: {},
    dinamicResponse: {}
};

setTimeout(function(){
    serviceResponse.staticResponse = {
        "a":1,
        "c":2,
        "d":3
    };
}, 3000);

var updateCounter = setInterval(function(){
    const couter = serviceResponse.dinamicResponse.couter;
    (couter || couter === 0) ? serviceResponse.dinamicResponse.couter++ : serviceResponse.dinamicResponse.couter = 0;
}, 1500);

var printStatus = setInterval(function(){
    console.log(serviceResponse.staticResponse);
    console.log(serviceResponse.dinamicResponse.couter);
}, 1000);

setTimeout(function(){
    clearInterval(updateCounter);
    clearInterval(printStatus);
}, 10000);