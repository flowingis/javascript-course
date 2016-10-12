"use strict";

var Person = function(name){
    this.name = name;

    var that = this;

    var print = function(){
        console.log(this);
        console.log(that);
    };

    //Bounded!
    this.print = print;

    console.log('Printing inside constructor');
    print();
};

var p = new Person('Francesco');

p.print();