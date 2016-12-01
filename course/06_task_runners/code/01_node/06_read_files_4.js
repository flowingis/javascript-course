var fs = require('fs');
var os = require('os');
var _ = require('lodash');
var path = require('path');

var readDirectoryContent = function (startPath, callback) {
    
    var tree = [];
    
    /*
    Inizializzamo la callback a noop per evitare errori
    */
    callback = callback || _.noop;
    
    
    /*
    Questa è la nostra funzione di stop, ogni volta che aggiungiamo
    un elemento, controlliamo se abbiamo riempito l'array. Notate che
    nella nostra implementazione conosciamo prima la lunghezza dell'array
    e poi il suo contenuto
    */
    var addToTree = function (element,desiredLength) {
        tree.push(element);
        
        if(tree.length === desiredLength){
            callback(tree);
        }
    };
    
    fs.readdir(startPath,function(err,data){
        if(err){
            console.log('error in reading directory ' + startPath);
            process.exit();
        }
        
        var length = data.length;
        
        _.each(data,function(innerPath){
            var currentPath = path.join(startPath,innerPath);
            
            console.log('reading ' + currentPath);
            
            fs.lstat(currentPath, function (err,stats) {
                if(err){
                    console.log('error in reading stats ' + innerPath);
                    process.exit();
                }
                
                var isDirectory = stats.isDirectory();
                
                var fileData = {
                    path:innerPath,
                    type:isDirectory ? 'directory' : 'file'
                };
                
                /*
                Quando è una directory chiamo l'addToTree come callback
                della funzione interna
                */
                
                if(isDirectory){
                    readDirectoryContent(currentPath, function(innerTree){
                        fileData.content = innerTree;
                        addToTree(fileData,length);
                    });
                }else{
                    addToTree(fileData,length);
                }
            });
        });
    });
};

var startPath = process.argv[2] || os.tmpdir();

readDirectoryContent(startPath,function(tree){
    console.log(JSON.stringify(tree,undefined,2));
});

