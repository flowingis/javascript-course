console.log('Definition');
console.log('................\n');

function myFunction(){
    console.log('This is a function');
}

myFunction();

console.log('\nOverload');
console.log('................\n');

function myFunctionWithParams(param1,param2){
    console.log('myFunctionWithParams:',param1,param2);
}

myFunctionWithParams(1,2);
myFunctionWithParams(3);

console.log('\nArguments');
console.log('................\n');

function usingArgs(){
	console.log("arguments",arguments);
}

usingArgs();
usingArgs(1,2);

console.log('\nArguments 2');
console.log('................\n');

function testArguments(){
	console.log("arguments.push = ", arguments.push);	//WAT?
	console.log("arguments.pop = ", arguments.pop);		//WAT?
    //  ECMAScript 2015
    //var args = Array.from(arguments);
    //  old
    var args = [].slice(arguments)
	console.log("args.push = ",args.push);
	console.log("args.pop = ",args.pop);
}

testArguments();

console.log('\nreturn values');
console.log('................\n');

function now() {
    return (new Date()).getTime();
}

console.log(now());

console.log('\nfunctions as parametes');
console.log('................\n');

function printResult(param){
    console.log(param());
}

printResult(now);

console.log('\nfunctions has a type');
console.log('................\n');

console.log(typeof now);

function printResult2(param){
    if(typeof param === 'function'){
        console.log(param())
    }else{
        console.log(param);
    }
}

printResult2(now);
printResult2("The End");

console.log('\nfunctions can be property of an object');
console.log('................\n');

var myObject = {
	boolProp:true,
	numberProp:42,
	stringProp:"myString",
	arrayProp: [1,2,3],
	funProp: function(param){
		console.log("I'm printing my param: "+param);
	},
	mySubObject: {
		boolProp:true,
		numberProp:42,
		stringProp:"myString",
		arrayProp: [1,2,3],
		funProp: function(param){
			console.log("I'm printing my param: "+param);
		}
	}
};

myObject.funProp();
myObject.funProp("Here I am!");
myObject.funProp(myObject.numberProp);

myObject.mySubObject.funProp();
myObject.mySubObject.funProp("Here I am!");
myObject.mySubObject.funProp(myObject.mySubObject.numberProp);

console.log('\nfunctions as parametes 2');
console.log('................\n');

function myModifier(element){
	return element + " is modified";
};

function mySecondModifier(element){
	return element + 1;
};

var myArray = [10, 20, 0, 4, 8];

function printModifiedArray(arr, elementModifier){
	for (var i = 0; i < arr.length; i++) {
		console.log("Log at Index("+i+"): "+elementModifier(arr[i]));
	}
};

printModifiedArray(myArray, myModifier);
printModifiedArray(myArray, mySecondModifier);

console.log('\ncopy or reference?');
console.log('................\n');

function firstFunction(value) {
	value = value + 1;
};

function secondFunction(value) {
	value.child = value.child + 1;
};

var x = 1;
var obj = {
	child:1
};

console.log('x before = ', x);
firstFunction(x);
console.log('x after = ', x);

console.log('obj before = ', obj);
secondFunction(obj);
console.log('obj after = ', obj);
