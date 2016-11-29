// File I/O (fs) is provided by simple wrappers around standard POSIX functions
// https://nodejs.org/api/fs.html

var fs = require('fs');
var os = require('os');

/*
    Come abbiamo accennato node è un sistema mono thread. Quindi tutte le chiamate per non essere bloccanti
    devono essere asincrone. Il pattern utilizzato dalla community node è una callback in cui il primo parametro
    è sempre l'eventuale errore.
 */
 
var directory = os.tmpdir();
 
fs.readdir(directory, function (err, data) {
   if (err) {
       console.log('error in reading directory ' + directory);
       console.log(err);
       process.exit();
   }
   console.log(data);
});