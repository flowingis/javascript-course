"use strict"

var request = require('request');

// 3 entry point:
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

var callToServer = function(entryPoint, data, callback){
    request.post('http://127.0.0.1:9090/'+entryPoint,
        { json: data },
        function (error, response, body) {
            var result;
            if (!error && response.statusCode == 200) {
                result = response.body.code;
            }else{
                result = "Error: "+JSON.stringify(response.body);
            }
            callback(result);
        }
    );
};

