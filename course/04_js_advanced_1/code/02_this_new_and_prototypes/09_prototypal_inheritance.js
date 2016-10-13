var Person = function(name,surname,age){
    this.name = name;
    this.surname = surname;
    this.age = age;
};

Person.prototype.getFullname = function () {
    return this.name + " " + this.surname;
};

Person.prototype.isAdult = function () {
    return this.age >= 18;
};

var Male = function(name, surname, age){
    Person.call(this,name, surname, age);
    this.sex = 'M';
};

var Female = function(name, surname, age){
    Person.call(this,name, surname, age);
    this.sex = 'F';
};

/*
    Per creare una sorta di ereditarietà bisogna passare per Object.create. Altrimenti passeremo semplicemente un rifierimento e non
    una copia.
 */
Male.prototype = Object.create(Person.prototype);
Female.prototype = Object.create(Person.prototype);

Male.prototype.getFullname = function () {
    return "Mr " + Person.prototype.getFullname.call(this);
};

Female.prototype.getFullname = function () {
    return "Ms " + Person.prototype.getFullname.call(this);
};

var man = new Male("Francesco","Strazzullo",30);
var woman = new Female("Lucia","Morbidelli",29);

console.log(JSON.stringify(man,undefined,2));
console.log(man.getFullname());
console.log(JSON.stringify(woman,undefined,2));
console.log(woman.getFullname());
