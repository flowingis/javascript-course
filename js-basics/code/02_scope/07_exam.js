var print = function(todos){
    console.log(JSON.stringify(todos, undefined, 2) + '\n');
};

var todoRepositoryFactory = function(){
   ///
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