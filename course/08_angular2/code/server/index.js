var express = require('express')
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var CITIES = require('./cities.data');
var comments = {
  bologna: ['commento1', 'commento2']
};

app.use(cors())
app.use(bodyParser.json());

app.get('/api/comments/:city/', function (req, res) {
    var result = [];
    if(req.params.city){
        var city = req.params.city.toLowerCase();
        result = comments[city] || [];
    }
    res.send(result)
});

app.post('/api/comments', function(req, res) {
    const comment = req.body;
    if(comment.city){
        const key = comment.city.toLowerCase();
        comments[key] = comments[key] || [];
        comments[key].push(comment);
        res.status(200).send({
            ok:true
        });
    }else{
        res.status(400).send({
            ok:false
        });
    }
});

app.post('/api/login', function(req, res) {
    const loginData = req.body;
    if(loginData.password === 'password'){
        res.status(200).send({
            ok:true
        });
    }else{
        res.status(400).send({
            ok:false
        });
    }
});

app.get('/api/cities', function(req, res) {
    res.send(CITIES);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
