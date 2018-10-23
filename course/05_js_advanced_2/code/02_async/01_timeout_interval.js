"use strict"

const serviceResponse = {
    staticResponse: {},
    dinamicResponse: {}
};

// after 3 seconds staticResponse is initiallized
setTimeout(() => {
    serviceResponse.staticResponse = {
        "a":1,
        "c":2,
        "d":3
    };
}, 3000);

// each 1.5 seconds dinamicResponse.counter will update by 1, or initiallized to 0 at first iteration
var updateCounter = setInterval(() => {
    let counter = serviceResponse.dinamicResponse.counter;
    (counter || counter === 0) ? serviceResponse.dinamicResponse.counter++ : serviceResponse.dinamicResponse.counter = 0;
}, 1500);

let secondCounter = 1;

// each second staticResponse and counter is printed
var printStatus = setInterval(() => {
    console.log("Sec: "+secondCounter);
    console.log(serviceResponse.staticResponse);
    console.log(serviceResponse.dinamicResponse.counter);
    console.log("------------------------------");
    secondCounter++;
}, 1000);

// after 10 seconds both interval is removed
setTimeout(() => {
    clearInterval(updateCounter);
    clearInterval(printStatus);
}, 10000);