var os = require('os');
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

var server = express();

server.use(bodyParser.text());

/*
    Lo scopo è creare un server rest con una rotta che ritorni
    l'albero della directory passata nel body sotto forma di json
 */
server.post('/listing', function(req, res){
    var startPath = req.body || os.tmpdir()
    //Do Something...
});


server.listen(3000, function () {
    console.log('Example server listening on port 3000!')
});