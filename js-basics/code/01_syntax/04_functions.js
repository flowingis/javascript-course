function myFunction(){
    console.log('This is a function');
};

myFunction();

//Overload
function myFunctionWithParams(param1,param2){
    console.log('myFunctionWithParams:',param1,param2);
};

myFunctionWithParams(1,2);
myFunctionWithParams(3);

//fucntion with return values
function now() {
    return (new Date()).getTime();
}

//functions as parameter
function printResult(param){
    console.log(param());
};

printResult(now);

//Function are objects
console.log(typeof now);

function printResult2(param){
    if(typeof param === 'function'){
        console.log(param())
    }else{
        console.log(param);
    }
};

printResult2(now);
printResult2("The End");
