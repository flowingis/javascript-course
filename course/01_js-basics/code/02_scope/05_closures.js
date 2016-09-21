"use strict";

var addFunctionFactory = function(initialValue){
    var a = initialValue || 0;

    var add = function(b){
        a = a + b;
        return a;
    };

    var get = function(){
        return a;
    };


    return {
        get:get,
        add:add
    };
};

var firstAdd = addFunctionFactory();
var secondAdd = addFunctionFactory(2);

firstAdd.add(2);
firstAdd.add(4);
secondAdd.add(3);
secondAdd.add(5);

console.log(firstAdd.get());
console.log(secondAdd.get());
