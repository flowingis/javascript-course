/*
    Se invece utilizziamo "use strict" quando il biding di default è undefined. In questo modo non possiamo collegarci
    dati per sbaglio come per le variabili globali
 */
"use strict";

var print = function() {
    console.log(this);
};

print();