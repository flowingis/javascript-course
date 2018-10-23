/*
    In Ecma6 sono state introdotte le classi ma non fatevi ingannare dalla forma. In realtà
    sono esattamente indentiche al meccanismo dei prototype.
 */
class Person {
    constructor(name,surname,age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    isAdult(){
        return this.age >= 18;
    }

    getFullname(){
        return `${this.name} ${this.surname}`;
    }
}

/*
    Possiamo anche estendere le classi. Ma anche qui è solo un wrapper attorno al discorso dei prototype
 */
class Employee extends Person{
    constructor(name,surname,age,company){
        super(name,surname,age);
        this.company = company;
    }
}

const p = new Person('Francesco','Strazzullo',30);
const e = new Employee('Francesco','Strazzullo',30,'extrategy');

console.log(p.getFullname());
console.log(e.getFullname());

/*
    Ecco infatti che è possibile modificare il prototype anche dopo la creazione di oggetti
 */

p.constructor.prototype.getFullname = function () {
    return 'Hello Another Guy';
};

console.log(p.getFullname());
console.log(e.getFullname());
