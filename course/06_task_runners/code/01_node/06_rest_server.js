var os = require('os');
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

/*
    Creiamo un'isntanza di server semplicemente inizializzando express
 */
var server = express();

/*
    Aggiungiamo un body parser per leggere i dati dalle post
 */
server.use(bodyParser.text());

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
        res.send(status)
    },1000);

});

server.post('/kebab', function(req, res){
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