/*
    Lo spread trasforma un'array in una serie di parametri. Utile per passare dati ad una funzione
 */
const print = function(x,y,z){
    console.log(x,y,z);
};

const data = [1,2,3];

print(data);
print(...data);

/*
    In realtà l'utilizzo più comune è quello di clonare rapidamente degli array
 */
const newData = [0,...data,4]; //Scrittura equivalente a [0,1,2,3,4]
console.log(newData);

/*
    Il rest operator invece fa un lavoro praticamente opposto...
 */
const print2 = function(...args){
    console.log(args.concat(['a param']));      //args è un vero array
};

print2(1);
print2('Hello','Wolrd','!');

/*
    È inolte possibile definire dei parametri di default nelle funzioni
 */
const print3 = function(value = 'hello'){
    console.log(value);
};

print3();
