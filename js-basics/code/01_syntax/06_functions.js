function myFunction(){
    console.log('This is a function');
}

myFunction();

//Overload
function myFunctionWithParams(param1,param2){
    console.log('myFunctionWithParams:',param1,param2);
}

myFunctionWithParams(1,2);
myFunctionWithParams(3);

//fucntion with return values
function now() {
    return (new Date()).getTime();
}

//functions as parameter
function printResult(param){
    console.log(param());
}

printResult(now);

//Function are objects
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

//Function can be property of object
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

//Fuction can take function as param
var myModifier = function(element){
	return element + " is modified";
};

var mySecondModifier = function(element){
	return element + 1;
};

var myArray = [10, 20, 0, 4, 8];

var printModifiedArray = function(arr, elementModifier){
	for (var i = 0; i < arr.length; i++) {
		console.log("Log at Index("+i+"): "+elementModifier(arr[i]));
	}
};

printModifiedArray(myArray, myModifier);
printModifiedArray(myArray, mySecondModifier);
