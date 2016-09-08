var _ = require('../../../node_modules/lodash');

var Person = function(args){
    this.name = args.name;
};

var me = new Person({
    name:'Francesco'
});

console.log(me.do);

Person.prototype.do = function(){
    console.log('Do Something Bro!');
};

console.log(me.do);

var Employee = function (args) {
    Person.call(this,args);
    this.company = args.company;
};

var daniele = new Employee({
    name: 'Daniele',
    company: 'extrategy'
});

var personFactory = function(args){
    return {
        name:args.name
    };
};

var anotherMe = personFactory({
   name:'Francesco'
});

console.log(_.isEqual(me,anotherMe));
console.log(typeof me === typeof anotherMe);
console.log(daniele);

console.log(daniele.prototype);
console.log(me.prototype);

var f = _.debounce(function(){
    console.log('Debounce');
},100);

f();
f();
f();
f();
f();
f();

setTimeout(function () {
    f();
},1000);

var m = _.memoize(function(value){
    console.log("I'm calculating ", value);

    for(var i = 0;i < 100000000;i++){
        Math.acos(i);
    }
    return value * 100;
});

console.log(m(100));
console.log(m(100));
console.log(m(100));
console.log(m(100));