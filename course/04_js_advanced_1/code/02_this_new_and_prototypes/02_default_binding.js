/*
    Il binding di default del this se non specificato in maniera esplicita è il global scope
 */
a = 2;

var print = function() {
    console.log( this.a );
};

print();