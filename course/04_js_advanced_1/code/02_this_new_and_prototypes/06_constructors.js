"use strict";

/*
    In JavaScript possiamo creare delle funzioni particolari, chiamate 'constructors' che sono un modo particolare
    di creare oggetti. Sono in pratica una shortcut per creare oggetti. All'interno dei constructors il this è l'oggetto che
    stiamo creando. Ma questo non ci mette al riparo da errori sul this come si vede da questo esempio. Una buona pratica è quella di
    dare un nome che inizia con la maiuscola ai constructors.
 */

var Person = function(name){
    this.name = name;

    var that = this;

    var print = function(){
        console.log(this);
        console.log(that);
    };

    //Bounded!
    this.print = print;

    console.log('Printing inside constructor');
    print();
};

/*
    Per creare un oggetto a partire da un constructor bisogna usare la parola chiave 'new'
 */

var p = new Person('Francesco');

p.print();