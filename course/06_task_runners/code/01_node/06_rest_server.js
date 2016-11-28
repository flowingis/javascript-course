var os = require('os');
var _ = require('lodash');
// Express is a minimal and flexible Node.js web application framework that provides 
// a robust set of features for web and mobile applications.
// http://expressjs.com/
var express = require('express');
// body-parser extract the entire body portion of an incoming request stream and exposes it on req.body 
// as something easier to interface with
// https://www.npmjs.com/package/body-parser
var bodyParser = require('body-parser');

/*
    Creiamo un'istanza di server semplicemente inizializzando express
 */
var server = express();

/*
    Aggiungiamo un body parser per leggere i dati dalle post
 */

// var jsonParser = bodyParser.json()
var textParser = bodyParser.text();

/*
    Tramite i metodi get, post, delete, etc possiamo definire le rotte alla quali il nostro server risponde
 */
server.get('/status', function(req, res) {
    var status = {
        platform:os.platform(),
        uptime: os.uptime(),
        username:  os.userInfo().username
    };

    /*
        Notate che la chiamata rimane pending finché non viene invocato res.send
     */
    setTimeout(function () {
        res.send(status);
    },1000);

});

server.post('/kebab', textParser, function(req, res){
    /*
        Una volta installato il body parser, possiamo leggere il valore dalla request
     */
    if(!req.body){
        res.status(400).send();
    }else{
        res.status(200).send(_.kebabCase(req.body));
    }
});


/*
    Facciamo infine partire il server sulla porta 3000
 */
server.listen(3000, function () {
    console.log('Example server listening on port 3000!')
});