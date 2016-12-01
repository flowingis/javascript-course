var fs = require('fs');
var os = require('os');
var _ = require('lodash');
var path = require('path');

var readDirectoryContent = function (startPath) {
    
    var tree = [];
    
    /*
    Questa è la nostra funzione di stop, ogni volta che aggiungiamo
    un elemento, controlliamo se abbiamo riempito l'array. Notate che
    nella nostra implementazione conosciamo prima la lunghezza dell'array
    e poi il suo contenuto
    */
    var addToTree = function (element,desiredLength) {
        tree.push(element);
        
        if(tree.length === desiredLength){
            return tree;
        }
    };
    
    var data = fs.readdirSync(startPath);
    
    var length = data.length;
    
    _.each(data,function(innerPath){
        var currentPath = path.join(startPath,innerPath);
        
        console.log('reading ' + currentPath);
        
        var stats = fs.lstatSync(currentPath);

        var isDirectory = stats.isDirectory();
        
        var fileData = {
            path:innerPath,
            type:isDirectory ? 'directory' : 'file'
        };
        
        if(isDirectory){
            var innerTree = readDirectoryContent(currentPath);
            fileData.content = innerTree;
            addToTree(fileData,length);
        }else{
            addToTree(fileData,length);
        }
    });
    
    return tree;
};

var startPath = process.argv[2] || os.tmpdir();

var tree = readDirectoryContent(startPath);

console.log(JSON.stringify(tree,undefined,2));

