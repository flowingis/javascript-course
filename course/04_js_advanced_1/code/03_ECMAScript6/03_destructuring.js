/*
    In Ecma6 grazie all'object destructuring possiamo definire più facilmente varibili
 */

const data = {
    x:1,
    y:2,
    z:3
};

const {x, y, z} = data;

console.log(x,y,z);

/*
    Si può poi creare velocemente un oggetto a partire da variabili
 */

const newData = {
    x,
    y,
    z
};

console.log(JSON.stringify(newData,undefined,2));