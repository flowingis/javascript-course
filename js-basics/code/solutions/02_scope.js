var print = function(todos){
    console.log(JSON.stringify(todos, undefined, 2) + '\n');
};

var todoRepositoryFactory = function(){
    var todos = [];

    var add = function(text){
        todos.push({
            text:text,
            done:false
        });
    };

    var update = function(index,text){
        todos[index].text = text;
    };

    var remove = function(index){
        todos.splice(index,1);
    };

    var markAsDone = function (index) {
        todos[index].done = true;
    };

    var get = function(){
      return Object.freeze(todos);
    };

    var getDone = function () {
        var doneTodos = [];
        for (i = 0; i < todos.length; i++) {
            if(todos[i].done){
                doneTodos.push(todos[i]);
            }
        }
        return Object.freeze(doneTodos);
    };

    return {
        add:add,
        update:update,
        remove:remove,
        markAsDone:markAsDone,
        getDone:getDone,
        get:get
    }
};

var todoRepository1 = todoRepositoryFactory();
var todoRepository2 = todoRepositoryFactory();

todoRepository1.add("I'm in the first todo list");
todoRepository1.add("I'm in the first todo list, Again");
todoRepository1.update(0,"New Text for me!");

todoRepository2.add("I'm in the second todo list");
todoRepository2.add("I'm in the second todo list, Again");
todoRepository2.remove(1);

todoRepository1.markAsDone(0);

print(todoRepository1.get());
print(todoRepository1.getDone());
print(todoRepository2.get());
print(todoRepository2.getDone());