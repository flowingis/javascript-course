var printPizza = function(pizza){
    console.log(JSON.stringify(pizza,undefined,2));
};

var invariant = function(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
};

var pizzaBuilderFactory = function(){
    var pizza = false;

    var getPizza = function(){
        invariant(pizza,'No pizza is created, create a pizza with "createNewPizza" method!');
        return pizza;
    };

    var addSauce = function() {
        invariant(pizza,'No pizza is created, create a pizza with "createNewPizza" method!');

        pizza.sauce = true;

        return builder;
    };

    var addToppings = function() {
        var args = Array.prototype.slice.call(arguments);

        invariant(pizza,'No pizza is created, create a pizza with "createNewPizza" method!');
        invariant(args.length > 0,'No topping is provided');

        for (var i = 0; i < args.length; i++) {
            pizza.toppings.push(args[i]);
        }

        return builder;
    };

    var setDough = function(dough) {
        invariant(pizza,'No pizza is created, create a pizza with "createNewPizza" method!');

        pizza.dough = dough;

        return builder;
    };

    var createNewPizza = function() {
        pizza = {
            sauce:false,
            toppings:[],
            dough:'classic'
        };

        return builder;
    };

    var builder = {
        getPizza:getPizza,
        addSauce:addSauce,
        addToppings:addToppings,
        setDough:setDough,
        createNewPizza:createNewPizza
    };

    return builder;
};

var margheritaBuilderFactory = function(){
    var builder = pizzaBuilderFactory();

    builder.createMargherita = function(){
        builder.createNewPizza().addSauce().addToppings('Mozzarella','Basilico','Olio a crudo');
        return builder;
    };

    return builder;
};

var builder = pizzaBuilderFactory();

var pizza1 = builder.createNewPizza().addSauce().getPizza();
var pizza2 = builder.createNewPizza().setDough('5 Cereali').getPizza();
var pizza3 = builder.createNewPizza().addToppings('Mozzarella').addToppings('Salame','Cipolla').getPizza();

printPizza(pizza1);
printPizza(pizza2);
printPizza(pizza3);

var margheritaBuilder = margheritaBuilderFactory();

var margherita = margheritaBuilder.createMargherita().getPizza();
var margheritaWithHam = margheritaBuilder.createMargherita().addToppings('Ham').getPizza();

printPizza(margherita);
printPizza(margheritaWithHam);
