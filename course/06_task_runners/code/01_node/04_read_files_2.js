var fs = require('fs');
var os = require('os');
var _ = require('lodash');
var path = require('path');
var process = require('process');

/*
    Complichiamo un po' le cose, se il path che analizziamo è una directory ne stampiamo il contenuto.
    Per farlo usiamo questa funzione ricorsiva.

    L'output che vogliamo ottenere è qualcosa del tipo

    F file1.zip
    D directory1
    - F file2.txt
    - D directory2
    -- F file3.mp3
    F file4.zip
 */
var readDirectoryContent = function (startPath, level) {
    fs.readdir(startPath,function(err,data){
        if(err){
            console.log('error in reading directory ' + startPath);
            process.exit();
        }

        _.each(data,function(innerPath){
            /*
                In node per concatenare directory utilizziamo l'oggetto path in modo
                da essere indipendenti dal sistema operativo
             */
            var currentPath = path.join(startPath,innerPath);

            /*
                Il metodo lstat ci ritorna delle informazioni sul path, una di queste è la sua natura: Directory o file
             */
            fs.lstat(currentPath, function (err,stats) {
                if(err){
                    console.log('error in reading stats ' + innerPath);
                    process.exit();
                }

                var isDirectory = stats.isDirectory();

                /*
                    Utilizziamo questo metodo per formattare il nostro albero:
                    ad ogni livello aggiunge un '-'
                 */
                var prefix = _.repeat('-',level);
                var type = (isDirectory ? 'D' : 'F');
                var message = [prefix, type, innerPath].join(' ');

                console.log(message);

                if(isDirectory){
                    readDirectoryContent(currentPath,level + 1);
                }
            });
        });

    });
};

/*
    La directory che vogliamo testare la possiamo prendere da riga di comando
 */

var startPath = process.argv[2] || os.tmpdir();
var level = 0;

readDirectoryContent(startPath,level);

