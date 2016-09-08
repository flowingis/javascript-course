var a = [];
var b;
var i;

console.log("a = " , JSON.stringify(a, undefined, 2) + '\n');

console.log('\nPush');
console.log('................\n');

var b = a.push(1);

console.log("a = " , JSON.stringify(a, undefined, 2) + '\n');
console.log("b = " , JSON.stringify(b, undefined, 2) + '\n');

console.log('\nPop');
console.log('................\n');

var b = a.pop();

console.log("a = " , JSON.stringify(a, undefined, 2) + '\n');
console.log("b = " , JSON.stringify(b, undefined, 2) + '\n');

console.log('\nConcat');
console.log('................\n');

a = [1];
b = [2];

b = a.concat(b).concat([3]);

console.log("a = " , JSON.stringify(a, undefined, 2) + '\n');
console.log("b = " , JSON.stringify(b, undefined, 2) + '\n');

console.log('\nUpdate values');
console.log('................\n');

a = [1,0,3];
a[1] = 2;

console.log("a = " , JSON.stringify(a, undefined, 2) + '\n');

console.log('\nMixing');
console.log('................\n');

a = [1];
a.push('string');
a.push(true);
a.push(undefined);
a.push({
    a:[1]
});

console.log("a = " , JSON.stringify(a, undefined, 2) + '\n');

console.log('\nThis is Evil!!!');
console.log('................\n');

a.aProperty = "I'm the devil";
console.log("a = " , JSON.stringify(a, undefined, 2) + '\n');       //Wat?
console.log(a.aProperty);

console.log('\nSplice');
console.log('................\n');

a = [1,2,5,6];
a.splice(2,0,3,4);

console.log("a = " , JSON.stringify(a, undefined, 2) + '\n');

a.splice(4,2);

console.log("a = " , JSON.stringify(a, undefined, 2) + '\n');

console.log('\nFor cycle for array');
console.log('................\n');

for (i = 0; i < a.length; i++) {
    console.log("printing element " + i + ": " + a[i]);
}
