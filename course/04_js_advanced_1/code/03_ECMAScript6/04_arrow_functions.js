/*
    La sintassi delle arrow function è molto veloce di creare funzioni al volo
    se la funzione ha una sola riga si può evitare il corpo e addirittura il return
 */
const add = (val1,val2) => val1+val2;

const addTimestamp = (val) => {
    const time = (new Date()).getTime();
    return val+time;
};

console.log(add(1,2));
console.log(addTimestamp(100));

/*
    Molto utile per creare funzioni inline per map,filter,reduce etc
 */

console.log([1,2,3,4].map((v) => v * 2));