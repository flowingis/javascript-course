"use strict"

var request = require('request');

// 3 entry point with no error:
//  -entry1 -> request: {} -> response: { code: code }
//  -entry2 -> request: { code: code_from_entry1_response } -> response: { code: code }
//  -entry3 -> request: { code: code_from_entry2_response } -> response: { result: code }
// console.log of entry3

// 3 entry point with error:
//  -entryError1 -> request: {} -> response: { code: code }
//  -entryError2 -> request: { code: code_from_entry1_response } -> response: { code: code }
//  -entryError3 -> request: { code: code_from_entry2_response } -> response: { result: code }
// before chain console.log("chain with error start");
// console.log of error
// after chain console.log("chain with error stop");

// chain without error must be printed before the one without error
// use callback for ensure this sequence

var callToServer = function(entryPoint, data){
    return new Promise(function(resolve, reject){
        request.post('http://127.0.0.1:9090/'+entryPoint,
            { json: data },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    resolve(response.body);
                }else{
                    reject("Error: "+JSON.stringify(response.body));
                }
            }
        );
    });
};

var chainNoError = function(callback){
    callToServer("entry1", {}).then(function(result){
        var code = result.code;
        return callToServer("entry2", { code: code});
    }).then(function(result){
        var code = result.code;
        return callToServer("entry3", { code: code});
    }).then(function(result){
        console.log(result.result);
        callback();
    });
};

var chainError = function(){
    console.log("chain with error start");
    callToServer("entryError1", {}).then(function(result){
        var code = result.code;
        return callToServer("entryError2", { code: code});
    }).then(function(result){
        var code = result.code;
        return callToServer("entryError3", { code: code});
    }).then(function(result){
        console.log(result.result);
    }).catch(function(e){
        console.log(e);
    }).then(function(){
        console.log("chain with error stop");
    });
};

chainNoError(chainError);