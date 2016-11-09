var Person = function(name){
    this.name = name;
};

/*
    Il prototype di ogni costruttore di base è quello di Object, da cui ereditiamo
    alcuni metodi. Questi qui sotto sono alcuni esempi. Per una lista completa potete visitare
    https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
 */
console.log(Person.prototype.toString === Object.prototype.toString);
console.log(Person.prototype.hasOwnProperty === Object.prototype.hasOwnProperty);

/*
    Notate però che i due prototype sono una la copia dell'altro e non la stessa istanza, perché i prototype vengono generati per copia
 */

console.log(Person.prototype === Object.prototype);

/*
    È possibile modificare completamente il prototype di un costruttore...
 */
Person.prototype = {
    print:function(){
        console.log(this.name);
    }
};

var p = new Person('Francesco');

p.print();

/*
    Ma in questo caso vi siete persi il riferimento al costruttore
 */
console.log(p.constructor === Person);
console.log(p.constructor === Object);