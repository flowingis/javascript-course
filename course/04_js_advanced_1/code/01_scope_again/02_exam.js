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

    /*
        Aggiungere qui le altre funzioni
     */

    var builder = {
        getPizza:getPizza
    };

    return builder;
};

var builder = pizzaBuilderFactory();

/*
    Dovete quindi creare i metodi
        -createNewPizza: inizializza una nuova pizza per poter iniziare a lavorare
        -addSauce: aggiunge la salsa (sauce = true) alla pizza
        -setDough: imposta l'impasto (una stringa). Il valore di default è 'classic'
        -addToppings: aggiunge uno o più condimenti

    Provate ad utilizzare l'invariant nei metodi per rendere robuto il codice
 */

var pizza1 = builder.createNewPizza().addSauce().getPizza();
var pizza2 = builder.createNewPizza().setDough('5 Cereali').getPizza();
var pizza3 = builder.createNewPizza().addToppings('Mozzarella').addToppings('Salame','Cipolla').getPizza();

printPizza(pizza1);
printPizza(pizza2);
printPizza(pizza3);

/*
    Creiamo ora un builder con un 'preset' per la margherita
 */
var margheritaBuilderFactory = function(){
    var builder = pizzaBuilderFactory();

    builder.createMargherita = function(){
        //Do Something...
    };

    return builder;
};

var margheritaBuilder = margheritaBuilderFactory();

var margherita = margheritaBuilder.createMargherita().getPizza();
var margheritaWithHam = margheritaBuilder.createMargherita().addToppings('Ham').getPizza();

printPizza(margherita);
printPizza(margheritaWithHam);
