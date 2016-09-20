"use strict"

const val = {
    sync_value: "foo",
    async_value: "bar"
};

const val2 = {
    sync_value: "foo",
    async_value: "bar"
};

let put_async_value = function(val, callback){
    val.sync_value = "new sync value";
    setTimeout(function(){
        val.async_value = "new async value";
        if(callback){ callback(); }
    }, 1000);
};

// <without callback>
put_async_value(val);

console.log("AFTER CALL");
console.log(val.sync_value);
console.log(val.async_value);
console.log("/AFTER CALL \n");
// </without callback>

// <without callback after delay>
setTimeout(function(){
    console.log("2 SECONDS AFTER CALL")
    console.log(val.sync_value);
    console.log(val.async_value);
    console.log("/2 SECONDS AFTER CALL \n")
}, 2000);
// </without callback after delay>

// <with callback>
put_async_value(val2, function(){
    console.log("IN CALLBACK");
    console.log(val2.sync_value);
    console.log(val2.async_value); 
    console.log("/IN CALLBACK \n");
});
// </with callback>