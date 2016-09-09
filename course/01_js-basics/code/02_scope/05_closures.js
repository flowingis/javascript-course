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

var firstAdd = addFunctionFactory();
var secondAdd = addFunctionFactory(2);

firstAdd(2);
firstAdd(4);
secondAdd(3);
secondAdd(5);
