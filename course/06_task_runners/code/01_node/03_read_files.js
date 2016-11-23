var fs = require('fs');
var os = require('os');

/*
    Come abbiamo accennato node è un sistema mono thread. Quindi tutte le chiamate per non essere bloccanti
    devono essere asincrone. Il pattern utilizzato dalla community node è una callback in cui il primo parametro
    è sempre l'eventuale errore.
 */
fs.readdir(os.tmpdir(),function(err,data){
   if(err){
       console.log('error in reading directory ' + os.tmpdir());
       process.exit();
   }

   console.log(data);
});