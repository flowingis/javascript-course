var obj = {
    first:'first',
    second:2
};

var child = {
    first:1
};

console.log(JSON.stringify(obj, undefined, 2) + '\n');

obj.third = child;

console.log(JSON.stringify(obj, undefined, 2) + '\n');

obj.third = undefined;

console.log(JSON.stringify(obj, undefined, 2) + '\n');
