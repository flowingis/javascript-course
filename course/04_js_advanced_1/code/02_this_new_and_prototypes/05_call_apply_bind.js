"use strict";

var printThis = function (param) {
    console.log(this,param);
};

console.log('Standard This');
console.log('................\n');

printThis(1);

/*
    Call e Apply permettono cambiare il this durante l'esecuzione. La differenza tra le due è nel modo di pasare i parametri.
 */

console.log('\nCall');
console.log('................\n');

printThis.call({name:'call'},2);

console.log('\nApply');
console.log('................\n');

printThis.apply({name:'apply'},[3]);

/*
    A differenza di call e apply, bind crea una copia della funzione originaria con il 'this' fissato
 */

console.log('\nBind');
console.log('................\n');

var newPrint = printThis.bind({name:'bind'},'test');

newPrint();
