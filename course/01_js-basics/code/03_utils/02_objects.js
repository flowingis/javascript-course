var _ = require('../../../../node_modules/lodash');

var print = function(data){
    console.log(JSON.stringify(data, undefined, 2) + '\n');
};

var user = {
    id:6,
    name:'Solid Snake',
    sex:'M'
};

print(user);

//Extend
console.log('Extend');
console.log('................\n');

var otherData = {
    name:'Jack',
    married:false,
    birthday:'01/01/1970'
};

var exUser = _.extend({},user,otherData);

print(exUser);

//Defaults
console.log('Defaults');
console.log('................\n');

exUser = _.defaults({},user,otherData);

print(exUser);

//Keys
console.log('Keys');
console.log('................\n');

console.log(_.keys(user));

//Values
console.log('\nValues');
console.log('................\n');

console.log(_.values(user));

//Pick
console.log('\nPick');
console.log('................\n');

var onlyName = _.pick(user,'name');
console.log(onlyName);

//Omit
console.log('\nOmit');
console.log('................\n');

var withoutName = _.omit(user,'name','id');
console.log(withoutName);