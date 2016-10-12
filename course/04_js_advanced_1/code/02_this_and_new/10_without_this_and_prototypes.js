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






