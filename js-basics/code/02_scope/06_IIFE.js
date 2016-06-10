//IIFE: Immediately Invoked Function Expression.
var a = 1;

(function(){
    var a = 2;
    console.log(a);
})();

console.log(a);

console.log('---');

//IFEE with params

b = 1; //NOOOO Global scope!!

(function(theScope){
    var a = theScope.b + 2;
    console.log(a);
    theScope.b = a + 2;
})(global);

console.log(b);