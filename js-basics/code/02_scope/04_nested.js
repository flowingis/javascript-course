"use strict";

var a = 1;

function addToA(b){
    a = a + b;
    return a;
}

addToA(1);

console.log(a);

function addToLocalA(b) {
    var a = 0;
    a = a + b;
    return a;
}

a = addToLocalA(4);

console.log(a);
