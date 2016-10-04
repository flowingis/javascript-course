var printThis = function (param) {
    console.log(this,param);
};

console.log('Standard This');
console.log('................\n');

printThis(1);

console.log('\nCall');
console.log('................\n');

printThis.call({},2);

console.log('\nBind');
console.log('................\n');

var newPrint = printThis.bind({
    foo:'bar'
},'test');

newPrint();