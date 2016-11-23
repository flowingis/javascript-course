var fs = require('fs');
var os = require('os');

fs.readdir(os.tmpdir(),function(err,data){
   if(err){
       console.log('error in reading directory ' + os.tmpdir());
   }

   console.log(data);
});