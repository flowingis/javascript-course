var Person = function(name,surname,age){
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.getFullname = function () {
        return this.name + " " + this.surname;
    }
};

var MaleDecorator = function(name, surname, age){
    Person.call(this,name,surname,age);

    var originalGetFullname = this.getFullname.bind(this);

    this.getFullname = function(){
        return "Mr " + originalGetFullname();
    };
};

var person = new MaleDecorator('Franceco','Strazzullo',30);

console.log(person.getFullname());