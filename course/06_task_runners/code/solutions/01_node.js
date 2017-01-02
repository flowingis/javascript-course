var os = require('os');
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

var server = express();

var bodyParser = bodyParser.text();

var readDirectoryContent = function (startPath, callback) {

    var tree = [];

    callback = callback || _.noop;


    var addToTree = function (element,desiredLength) {
        if (element) {
            tree.push(element);
        }

        if(tree.length === desiredLength){
            callback(undefined, tree);
        }
    };

    fs.readdir(startPath,function(err,data){
        if(err){
            callback('error in reading directory ' + startPath);
        }else{
            var length = data.length;

            if (length === 0) {
                addToTree(null,0);
            }
            
            _.each(data,function(innerPath, index){
                var currentPath = path.join(startPath,innerPath);

                console.log('reading ' + currentPath);

                fs.lstat(currentPath ,function (err,stats) {
                    if(err){
                        callback('error in lsstat ' + currentPath);
                    }else{
                        var isDirectory = stats.isDirectory();

                        var fileData = {
                            path:innerPath,
                            type:isDirectory ? 'directory' : 'file'
                        };

                        if(isDirectory){
                            readDirectoryContent(currentPath, function(err, innerTree){
                                if (err) {
                                    callback('errore');
                                } else {
                                    fileData.content = innerTree;
                                    addToTree(fileData,length);
                                }
                            });
                        }else{
                            addToTree(fileData,length);
                        }
                    }
                });
            });
        }
    });
};


server.post('/listing', bodyParser, function(req, res){
    var startPath = req.body || os.tmpdir();
    readDirectoryContent(startPath,function(err, tree){
        if(err){
            res.status(400).send(err)
        }else{
            res.status(200).send(tree);
        }
    });
});


/*
 Facciamo infine partire il server sulla porta 3000
 */
server.listen(3000, function () {
    console.log('Example server listening on port 3000!')
});