/*
    Questa semplice funzione si occupa di aggiungere tutte le proprietà
    di source su target. Notate che target viene cambiato per riferimento
 */
var mixin = function(target,source) {
    for (var key in source) {
        /*
            Copia solo se non presente (_.defaults in lodash)
         */
        if (!(key in target)) {
            target[key] = source[key];
        }
    }

    return target;
};

var person = {
    name:'Francesco',
    surname:'Strazzullo',
    getFullName:function(){
        return person.name + " " + person.surname;
    }
};

var employee = {
    company:'extrategy'
};

mixin(employee,person);

console.log(employee.getFullName());