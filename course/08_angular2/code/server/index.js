var express = require('express')
var app = express();
var cors = require('cors');
var comments = {};

app.use(cors())

app.get('/api/comments/:city/', function (req, res) {
    var result = [];
    if(req.params.city){
        var city = req.params.city.toLowerCase();
        result = comments[city] || [];
    }
    res.send(result)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});