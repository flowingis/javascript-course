"use strict";

var addFunctionFactory = function(initialValue){
    var a = initialValue || 0;
    var add = function(b){
        a = a + b;
        console.log(a);
        return a;
    };

    return add;
};

var firstFunction = addFunctionFactory(0);
var secondFunction = addFunctionFactory(2);

firstFunction(2);
firstFunction(4);
secondFunction(3);
secondFunction(5);