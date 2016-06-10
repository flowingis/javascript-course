function printTodos(){
    console.log(JSON.stringify(todos, undefined, 2) + '\n');
};

//Execution

printTodos();
addTodo('Go to the Gym');
console.log('Added a Todo');
printTodos();
addTodo('Got eat an Hambureger');
console.log('Added a Todo');
printTodos();
updateTodo(1,'Got eat a Salad');
console.log('Updated a Todo');
printTodos();
markAsDone(0);
console.log('Marked a Todo as done');
console.log(JSON.stringify(getDoneTodos(), undefined, 2) + '\n');
printTodos();
removeTodo(1);
removeTodo(0);
console.log('Removed two todos');
printTodos();
