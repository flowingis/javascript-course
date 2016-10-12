"use strict";

var printThis = function (param) {
    console.log(this,param);
};

console.log('Standard This');
console.log('................\n');

printThis(1);

console.log('\nCall');
console.log('................\n');

printThis.call({name:'call'},2);

console.log('\nApply');
console.log('................\n');

printThis.apply({name:'apply'},[3]);

console.log('\nBind');
console.log('................\n');

var newPrint = printThis.bind({
    name:'bind'
},'test');

newPrint();

console.log('\nHard Binding');
console.log('................\n');

var obj = {
    a:1
};

var printA = function(){
    console.log(this.a);
};

var objPrintA = printA.bind(obj);

var otherObj = {
    a:2,
    print:objPrintA
};

otherObj.print();
