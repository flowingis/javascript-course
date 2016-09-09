var _ = require('../../../../node_modules/lodash');

var log = function(){
    console.log('Hi Folks');
};

//Noop
console.log('Noop');
console.log('................\n');
_.noop(); //Just Does nothing

var invoke = function(f){
  f = f || _.noop;
  f('Test');
};

invoke(console.log);
invoke(); //No Error


//Before
console.log('\nBefore');
console.log('................\n');

var before = _.before(4,log);

before();
before();
before();
before();

//After
console.log('\nAfter');
console.log('................\n');

var after = _.after(4,log);

after();
after();
after();
after();

//Once
console.log('\nOnce');
console.log('................\n');

var getTimestamp = function(){
    return (new Date()).getTime();
};

var onlyOnce = _.once(getTimestamp);

console.log(onlyOnce());
console.log(onlyOnce());
console.log(onlyOnce());
console.log(onlyOnce());
console.log(onlyOnce());
console.log(onlyOnce());

//Wrap
console.log('\nWrap');
console.log('................\n');

var wrappedLog = _.wrap(console.log,function(f,param){
    f("I'm wrapped " + param);
});

wrappedLog("here");
