var a = [];
var b;

console.log(JSON.stringify(a, undefined, 2) + '\n');

var b = a.push(1);

console.log(JSON.stringify(a, undefined, 2) + '\n');
console.log(JSON.stringify(b, undefined, 2) + '\n');

var b = a.pop();

console.log(JSON.stringify(a, undefined, 2) + '\n');
console.log(JSON.stringify(b, undefined, 2) + '\n');

a = [1];
b = [2];

b = a.concat(b).concat([3]);

console.log(JSON.stringify(a, undefined, 2) + '\n');
console.log(JSON.stringify(b, undefined, 2) + '\n');

a = [1,0,3];
a[1] = 2;

console.log(JSON.stringify(a, undefined, 2) + '\n');

a = [1];
a.push('string');
a.push(true);
a.push(undefined);
a.push({
    a:[1]
});

console.log(JSON.stringify(a, undefined, 2) + '\n');

//This is Evil!!!
a.aProperty = "I'm the devil";
console.log(JSON.stringify(a, undefined, 2) + '\n');
console.log(a.aProperty);

a = [1,2,5,6];
a.splice(2,0,3,4);

console.log(JSON.stringify(a, undefined, 2) + '\n');

a.splice(4,2);

console.log(JSON.stringify(a, undefined, 2) + '\n');
