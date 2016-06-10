a = 1;
var b = 1;

console.log(a);
console.log(global.a);
console.log(b);
console.log(global.b);

function dummyFunction(){
    a++;
};

dummyFunction();

console.log(a);
console.log(global.a);
console.log(b);
console.log(global.b);