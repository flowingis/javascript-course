"use strict"

const infiniteSequentialUnitGenerator = function* (){
    let counter = 0
    while(true){
        try{
            yield counter++;
        }catch(e){
            console.log("Error: "+e);
        }
    }
};

const unit = infiniteSequentialUnitGenerator();
const unit2 = infiniteSequentialUnitGenerator();

console.log("UNIT GENERATOR");
console.log(unit.next());
console.log(unit.next());
console.log(unit.next());
// return set value to passed value and stop generator
console.log(unit.return(10));
console.log(unit.next());
console.log("/UNIT GENERATOR");

console.log("UNIT2 GENERATOR");
console.log(unit2.next());
console.log(unit2.next());
console.log(unit2.next());
// throw use error catching of generator but don't stop it
console.log(unit2.throw("my error"));
console.log(unit2.next());
console.log("/UNIT2 GENERATOR");