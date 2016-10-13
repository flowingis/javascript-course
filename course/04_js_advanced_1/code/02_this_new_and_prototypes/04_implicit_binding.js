"use strict";

var print = function() {
    console.log(this.a);
};

try{
    print();
}catch (e){
    console.log('This is undefined in strict mode');
}

/*
    A differenza della gestione dello scope il valore di 'this' non dipende da dove viene dichiarata la funzione.
    Ma da dove viene invocata. Infatti nel primo caso print è invocata scollegata da qualsiasi oggetto. In questo caso
    this è undefined. Quando invece colleghiamo la stessa funzione ad un object il this diventa quell'oggetto.
*/

var obj = {
    a:1,
    print:print
};

obj.print();

/*
    Se poi spostiamo di nuovo l'invocazione torniamo ad ottenere undefined
 */

var printAgain = obj.print;

try{
    printAgain();
}catch (e){
    console.log('This is undefined in strict mode');
}