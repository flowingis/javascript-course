var process = require('process');

setTimeout(function(){
    var argv = process.argv;

    /*
        argv[0] è il path del binario di node invocato
        argv[1] è il node del file che sta girando
        tutti gli altri sono i parametri aggiuntivi
     */

    var message = argv[2] || 'No param';

    console.log(message)
},1000);

//L'oggetto process è utile per collegarsi ad eventi di sistema, in questo caso ci colleghiamo alla chiusura del processo
process.on('exit', (code) => {
    console.log('Exiting with code ' + code);
});