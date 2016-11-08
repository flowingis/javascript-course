"use strict"

let serviceResponse = {
    staticResponse: {},
    dinamicResponse: {}
};

// after 3 seconds staticResponse is initiallized
setTimeout(function(){
    serviceResponse.staticResponse = {
        "a":1,
        "c":2,
        "d":3
    };
}, 3000);

// each 1.5 seconds dinamicResponse.couter will update by 1, or initiallized to 0 at first iteration
var updateCounter = setInterval(function(){
    let couter = serviceResponse.dinamicResponse.couter;
    (couter || couter === 0) ? serviceResponse.dinamicResponse.couter++ : serviceResponse.dinamicResponse.couter = 0;
}, 1500);

let secondCounter = 1;

// each second staticResponse and counter is printed
var printStatus = setInterval(function(){
    console.log("Sec: "+secondCounter);
    console.log(serviceResponse.staticResponse);
    console.log(serviceResponse.dinamicResponse.couter);
    console.log("------------------------------");
    secondCounter++;
}, 1000);

// after 10 seconds both interval is removed
setTimeout(function(){
    clearInterval(updateCounter);
    clearInterval(printStatus);
}, 10000);