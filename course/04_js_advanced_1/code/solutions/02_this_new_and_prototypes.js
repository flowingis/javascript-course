var personFactory = function(name,surname,age){
    var person = {
        name:name,
        surname:surname,
        age:age
    };

    var getFullname = function(){
        return person.name + " " + person.surname;
    };

    var isAdult = function () {
        return person.age >= 18;
    };

    person.getFullname = getFullname;
    person.isAdult = isAdult;

    return person;
};

var maleFactory = function (name,surname,age) {
    var male = personFactory(name,surname,age);

    male.sex = 'M';

    var personGetFullname = male.getFullname;

    male.getFullname = function(){
        return 'Mr ' + personGetFullname();
    };

    return male;
};

var femaleFactory = function (name,surname,age) {
    var female = personFactory(name,surname,age);

    female.sex = 'F';

    var personGetFullname = female.getFullname;

    female.getFullname = function(){
        return 'Ms ' + personGetFullname();
    };

    return female;
};

var personBuilderFactory = function(){
    var person = false;

    var createPerson = function(){
        person = {};
        return builder;
    };

    var setSex = function(sex){
        person.sex = sex;
        return builder;
    };

    var setName = function(name){
        person.name = name;
        return builder;
    };

    var setSurname = function(surname){
        person.surname = surname;
        return builder;
    };

    var setAge = function(age){
        person.age = age;
        return builder;
    };

    var getPerson = function () {
        var factory = person.sex === 'M' ? maleFactory : femaleFactory;
        return factory(person.name,person.surname,person.age);
    };

    var builder = {
        createPerson:createPerson,
        setSex:setSex,
        setName:setName,
        setSurname:setSurname,
        setAge:setAge,
        getPerson:getPerson
    };

    return builder;
};

var me = maleFactory('Francesco','Strazzullo',30);
var myGirlfriend = femaleFactory('Lucia','Morbidelli',29);

var personBuilder = personBuilderFactory();

var anotherMe = personBuilder.createPerson().setSex('M').setName('Francesco').setSurname('Strazzullo').setAge(30).getPerson();

console.log(me.getFullname());
console.log(myGirlfriend.getFullname());
console.log(anotherMe.getFullname());