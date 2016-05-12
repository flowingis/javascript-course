function myFunction(){
    console.log('myFunction');
};

myFunction();

function myFunctionWithParams(param1,param2){
    console.log('myFunctionWithParams');
    console.log(param1);
    console.log(param2);
};

myFunctionWithParams(1,2);
myFunctionWithParams(3);

console.log(typeof myFunction);
