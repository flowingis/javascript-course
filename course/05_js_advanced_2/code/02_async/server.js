"use strict"

var express = require('express');
var http = require('http');

var app = express();

app.post("*entry1", function(req, res){
    var requestBody = "";
    setTimeout(function(){
        req.on("data", function(chunk) {
            requestBody = JSON.parse(chunk.toString());
            res.write(JSON.stringify({ code: 'secret_code_1' }));
            res.end();
        });
    }, 500);
});

app.post("*entry2", function(req, res){
    var requestBody = "";
    setTimeout(function(){
        req.on("data", function(chunk) {
            requestBody = JSON.parse(chunk.toString());
            if(requestBody.code === "secret_code_1"){
                res.write(JSON.stringify({ code: "code_secret_2" }));
            }else{
                res.status(400).send('Invalid code');
            }
            res.end();
        });
    }, 3000);
});

app.post("*entry3", function(req, res){
    var requestBody = "";
    setTimeout(function(){
        req.on("data", function(chunk) {
            requestBody = JSON.parse(chunk.toString());
            if(requestBody.code === "code_secret_2"){
                res.write(JSON.stringify({ result: "SUCCESS" }));
            }else{
                res.status(400).send('Invalid code');
            }
            res.end();
        });
    }, 1000);
});

app.post("*entryError1", function(req, res){
    var requestBody = "";
    setTimeout(function(){
        req.on("data", function(chunk) {
            requestBody = JSON.parse(chunk.toString());
            res.write(JSON.stringify({ code: 'secret_code_1' }));
            res.end();
        });
    }, 500);
});

app.post("*entryError2", function(req, res){
    var requestBody = "";
    setTimeout(function(){
        req.on("data", function(chunk) {
            requestBody = JSON.parse(chunk.toString());
            res.status(400).send('Invalid code');
            res.end();
        });
    }, 3000);
});

app.post("*entryError3", function(req, res){
    var requestBody = "";
    setTimeout(function(){
        req.on("data", function(chunk) {
            requestBody = JSON.parse(chunk.toString());
            if(requestBody.code === "code_secret_2"){
                res.write(JSON.stringify({ result: "SUCCESS" }));
            }else{
                res.status(400).send('Invalid code');
            }
            res.end();
        });
    }, 1000);
});

http.createServer(app).listen(9090);
console.log("Server served at: http://127.0.0.1:9090");