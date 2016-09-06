var key = 'third';

var obj = {
    first:'first',
    second:2
};

var child = {
    first:1
};

console.log("obj = ", JSON.stringify(obj, undefined, 2) + '\n');

obj.third = child;
obj.third.first = 2;

console.log("obj = ", JSON.stringify(obj, undefined, 2) + '\n');

obj[key] = undefined;

console.log("obj = ", JSON.stringify(obj, undefined, 2) + '\n');