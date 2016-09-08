var ghpages = require('gh-pages');

var options = {
    src:[
        "index.html",
        "course/**/*",
        "img/**/*"
    ]
};

ghpages.publish(__dirname,options,function(){
   console.log("Published!");
});