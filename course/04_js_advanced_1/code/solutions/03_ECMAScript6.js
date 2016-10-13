class Person {
    constructor({name,surname,age}){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    isAdult(){
        return this.age >= 18;
    }

    getFullname(){
        return `${this.name} ${this.surname}`
    }
}

class Male extends Person{
    constructor({name,surname,age}){
        super({name,surname,age});
        this.sex = "M";
    }

    getFullname() {
        return `Mr ${super.getFullname()}`;
    }
}

class Female extends Person{
    constructor({name,surname,age}){
        super({name,surname,age});
        this.sex = "F";
    }

    getFullname() {
        return `Ms ${super.getFullname()}`;
    }
}

class PersonBuilder {
    constructor(){
        this.person = false;
    }

    createPerson(){
        this.person = {};
        return this;
    }

    setSex(sex){
        this.person.sex = sex;
        return this;
    }

    setName(name) {
        this.person.name = name;
        return this;
    }

    setSurname(surname) {
        this.person.surname = surname;
        return this;
    }

    setAge(age) {
        this.person.age = age;
        return this;
    }

    getPerson(){
        var chosenClass = this.person.sex === 'M' ? Male : Female;
        return new chosenClass(this.person);
    }
}


var me = new Male({name:'Francesco',surname:'Strazzullo',age:30});
var myGirlfriend = new Female({name:'Lucia',surname:'Morbidelli',age:29});

var personBuilder = new PersonBuilder();

var anotherMe = personBuilder.createPerson().setSex('M').setName('Francesco').setSurname('Strazzullo').setAge(30).getPerson();

console.log(me.getFullname());
console.log(myGirlfriend.getFullname());
console.log(anotherMe.getFullname());