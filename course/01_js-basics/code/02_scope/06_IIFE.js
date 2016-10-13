console.log('IIFE: Immediately Invoked Function Expression');
console.log('................\n');

var a = 1;

if(a > 0){
    (function(){
        var a = 2;
        console.log(a);
    })();
}

console.log(a);

console.log('IFEE with params');
console.log('................\n');

b = 1; //NOOOO Global scope!!

(function(theScope){
    var a = theScope.b + 2;
    console.log(a);
    theScope.b = a + 2;
})(global);

console.log(b);
