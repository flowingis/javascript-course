"use strict"

const request = require('request');

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

const callToServer = (entryPoint, data) => {
    return new Promise((resolve, reject) => {
        request.post('http://127.0.0.1:9090/'+entryPoint,
            { json: data },
            (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    resolve(response.body);
                }else{
                    reject("Error: "+JSON.stringify(response.body));
                }
            }
        );
    });
};

const chainNoError = (callback) => {
    callToServer("entry1", {}).then((result) => {
        const { code } = result;
        return callToServer("entry2", { code });
    }).then((result) => {
        const { code } = result;
        return callToServer("entry3", { code });
    }).then((result) => {
        console.log(result.result);
        callback();
    });
};

const chainError = () => {
    console.log("chain with error start");
    callToServer("entryError1", {}).then((result) => {
        const { code } = result;
        return callToServer("entryError2", { code });
    }).then((result) => {
        const { code } = result;
        return callToServer("entryError3", { code });
    }).then((result) => {
        console.log(result.result);
    }).catch((e) => {
        console.log(e);
    }).then(() => {
        console.log("chain with error stop");
    });
};

chainNoError(chainError);