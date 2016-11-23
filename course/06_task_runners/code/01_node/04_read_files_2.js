var fs = require('fs');
var os = require('os');
var _ = require('lodash');
var path = require('path');
var process = require('process');

var startPath = process.argv[2] || os.tmpdir();
var level = 0;

var readDir = function (startPath,level) {
    fs.readdir(startPath,function(err,data){
        if(err){
            console.log('error in reading directory ' + startPath);
            process.exit();
        }

        _.each(data,function(innerPath){
            var currentPath = path.join(startPath,innerPath);
            fs.lstat(currentPath ,function (err,stats) {
                if(err){
                    console.log('error in reading stats ' + innerPath);
                    process.exit();
                }

                var isDirectory = stats.isDirectory();

                var message = _.repeat('-',level);
                message += ' ' + (isDirectory ? 'D' : 'F');
                message += ' ' + innerPath;
                console.log(message);

                if(isDirectory){
                    readDir(currentPath,level + 1);
                }
            });
        });

    });
};

readDir(startPath,level);

