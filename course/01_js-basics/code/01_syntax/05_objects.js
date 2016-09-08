console.log('Object literals');
console.log('................\n');

var obj = {
    first:'first',
    second:2
};

console.log("obj = ", JSON.stringify(obj, undefined, 2) + '\n');

console.log('\nNesting');
console.log('................\n');

var child = {
    first:1
};

obj.third = child;
obj.third.first = 2;

console.log("obj = ", JSON.stringify(obj, undefined, 2) + '\n');

console.log('\nDynamic keys');
console.log('................\n');

var key = 'third';

obj[key] = undefined;

console.log("obj = ", JSON.stringify(obj, undefined, 2) + '\n');