a = 1;

console.log(a);
console.log(global.a);

function dummyFunction(){
    a++;
    b = a * a;
}

dummyFunction();

console.log(global.a);
console.log(global.b);