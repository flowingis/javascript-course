/*
    In ECMA5 per dichiarare variabili con scope di "block" bisogna ricorrere alle IFEE
 */

var aFunction = function(){
    var x = 1;
    if(x){
        (function () {
            var y = 1;
            console.log('x+y',x+y);
        })();
    }
    try{
        console.log(y);
    }catch(e){
        console.log('y is not defined outside the block scope');
    }
};

aFunction();

/*
    In ECMA6 invece è possibile utilizzare la nuova parola chiave 'let'
 */

var bFunction = function(){
    var x = 1;
    if(x){
        let y = 1;
        console.log('x+y',x+y);
    }
    try{
        console.log(y);
    }catch(e){
        console.log('y is not defined outside the block scope');
    }
};

bFunction();

/*
    Inoltre è possibile utilizzare anche const che oltre ad avere il block scope come let, rende anche
    l'oggetto non riassegnabile
 */

var cFunction = function(){
    var x = 1;
    if(x){
        const y = 1;
        console.log('x+y',x+y);
        try {
            y = 2;
        }catch(e){
            console.log('y is not assignable');
        }
    }
};

cFunction();

/*
    Notate però che const rende il riferimento immutabile e non l'oggetto in se
 */

var dFunction = function(){
    var x = 1;
    if(x){
        const y = [1];
        console.log('[x].concat(y)',[x].concat(y));
        try {
            y.push(2);
        }catch(e){
            console.log('y is not assignable');
        }
    }
};

dFunction();

