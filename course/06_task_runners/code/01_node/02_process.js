// The process object is a global that provides information about, and control over, 
// the current Node.js process. As a global, it is always available to Node.js 
// applications without using require()
// https://nodejs.org/api/process.html

setTimeout(function(){
    var argv = process.argv;
    console.log(argv);

    /*
        argv[0] è il path del binario di node invocato
        argv[1] è il node del file che sta girando
        tutti gli altri sono i parametri aggiuntivi
     */

    var message = argv[2] || 'No param';

    console.log(message);
},1000);

// L'oggetto process è utile per collegarsi ad eventi di sistema, in questo caso ci colleghiamo alla chiusura del processo
process.on('exit', (code) => {
    // lista degli exit codes: https://nodejs.org/api/process.html#process_exit_codes
    // 0 -> no more async operations are pending
    console.log('Exiting with code ' + code);
});