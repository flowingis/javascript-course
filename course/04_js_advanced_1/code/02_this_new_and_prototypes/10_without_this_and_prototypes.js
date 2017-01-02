var Person = function(name,age){
    this.name = name;
    this.age = age;
    this.isAdult = function(){
        return this.age >= 18;
    };
};

var person = new Person('Francesco',30);

console.log(person.isAdult());
person.age = 10;
console.log(person.isAdult());

/*
    A livello semantico in realtà, tutta la gestione dei constructor è solo zucchero sintattico.
    I quali però si portano dietro i pericoli del this e del prototype. È possibile ottenere un risultato migliore
    con una semplice factory.
 */

var personFactory = function (name,age) {
    var person = {
        name:name,
        age:age
    };

    var isAdult = function(){
        return person.age >= 18;
    };

    person.isAdult = isAdult;

    return person;
};

person = personFactory('Francesco',30);

console.log(person.isAdult());
person.age = 10;
console.log(person.isAdult());






