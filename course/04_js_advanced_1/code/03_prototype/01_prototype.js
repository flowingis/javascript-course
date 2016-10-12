var Person = function(name){
    this.name = name;
};

var me = new Person('Francesco');

console.log(me.name + " " + me.surname);

/*
    Ogni costruttore ha accesso alla proprietà propotype che permette
    di modificare il comportamento degli oggetti dopo la loro creazione
 */
Person.prototype.surname = 'Strazzullo';

console.log(me.name + " " + me.surname);

/*
    Gli oggetti creati dopo la modifica del prototype ne prendono automaticamente il comportamento
 */

var mySister = new Person('Maria');

console.log(mySister.name + " " + mySister.surname);

/*
    Quando un oggetto modifica il comportamento 'ereditato' dal suo prototype, quello del prototype viene oscurato
 */
mySister.surname = 'Strazzullo2';

console.log(mySister.name + " " + mySister.surname);
console.log(me.name + " " + me.surname);

/*
    È possibile recuperare il comportamento originario tramite Object.getPrototypeOf
 */
console.log(Object.getPrototypeOf(mySister).surname);
