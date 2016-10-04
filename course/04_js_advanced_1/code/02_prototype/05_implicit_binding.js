"use strict";

var print = function() {
    console.log(this.a);
};

try{
    print();
}catch (e){
    console.log('This is undefined in strict mode');
}


var obj = {
    a:1,
    print:print
};

obj.print();