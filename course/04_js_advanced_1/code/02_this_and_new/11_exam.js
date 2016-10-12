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

Male.prototype = Object.create(Person.prototype);
Female.prototype = Object.create(Person.prototype);

Male.prototype.getFullname = function () {
    return "Mr " + Person.prototype.getFullname.call(this);
};

Female.prototype.getFullname = function () {
    return "Ms " + Person.prototype.getFullname.call(this);
};

var PersonBuilder = function(){
    this.person = false;

    this.createPerson = function(){
        this.person = {};
        return this;
    };

    this.setSex = function(sex){
        this.sex = sex;
        return this;
    };

    this.setName = function(name){
        this.name = name;
        return this;
    };

    this.setSurname = function(surname){
        this.surname = surname;
        return this;
    };

    this.setAge = function(age){
        this.age = age;
        return this;
    };

    this.getPerson = function () {
        var Constructor = this.sex === 'M' ? Male : Female;
        return new Constructor(this.name,this.surname,this.age);
    };
};

var me = new Male('Franceco','Strazzullo',30);
var myGirlfriend = new Female('Lucia','Morbidelli',29);

var personBuilder = new PersonBuilder();

var anotherMe = personBuilder.createPerson().setSex('M').setName('Francesco').setSurname('Strazzullo').setAge(30).getPerson();

console.log(me.getFullname());
console.log(myGirlfriend.getFullname());
console.log(anotherMe.getFullname());