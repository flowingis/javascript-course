//Coercion
var answer = "42";
var doubleAnswer = answer * 2;

console.log(answer, typeof answer);
console.log(doubleAnswer, typeof doubleAnswer);

answer = 42;
doubleAnswer = (answer * 2) + "";

console.log(answer, typeof answer);
console.log(doubleAnswer, typeof doubleAnswer);

console.log('---');

//Truthy & Falsy
if(false){
    console.log('false is true');
}else{
    console.log('false is false');
}

if(""){
    console.log('"" is true');
}else{
    console.log('"" is false');
}

if(0){
    console.log('0 is true');
}else{
    console.log('0 is false');
}

if(NaN){
    console.log('NaN is true');
}else{
    console.log('NaN is false');
}

if(null){
    console.log('null is true');
}else{
    console.log('null is false');
}

if(undefined){
    console.log('undefined is true');
}else{
    console.log('undefined is false');
}

//Quick boolean cast
console.log(!!"");

console.log('---');

//Or operator
var a = null;
var b = a || 1;

console.log("b", b);

console.log('---');

//Equality
a = "42";
b = 42;

console.log('a == b',a == b);
console.log('a === b',a === b);

console.log('---');

//Special cases
a = 0/0; //NaN
b = NaN;

console.log('a === b',a === b);
console.log('b === a',b === a);
console.log('isNaN(a) && isNaN(b)',isNaN(a) && isNaN(b));

