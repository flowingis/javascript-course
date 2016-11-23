var fs = require('fs');
var os = require('os');
var _ = require('lodash');
var path = require('path');
var process = require('process');

var startPath = process.argv[2] || os.tmpdir();

var readDir = function (startPath,callback) {

    var tree = [];
    callback = callback || _.noop;

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

        _.each(data,function(innerPath, index){
            var currentPath = path.join(startPath,innerPath);

            console.log('reading ' + currentPath);

            fs.lstat(currentPath ,function (err,stats) {
                if(err){
                    console.log('error in reading stats ' + innerPath);
                    process.exit();
                }

                var isDirectory = stats.isDirectory();

                var fileData = {
                    path:innerPath,
                    type:isDirectory ? 'directory' : 'file'
                };

                if(isDirectory){
                    readDir(currentPath, function(innerTree){
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

readDir(startPath,function(tree){
    console.log(JSON.stringify(tree,undefined,2));
});

