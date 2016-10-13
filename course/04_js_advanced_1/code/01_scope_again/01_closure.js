var accumulatorFactory = function (initialValue) {
    var value = initialValue || 0;

    var add = function (i) {
        /*
            in questo caso il valore di value, non viene trovato
            all'interno della funzione 'add' e quindi salgo di un livello
            arrivando a 'accumulatorFactory'
         */
        value += parseInt(i,10) || 0;
        /*
            ritorno l'istanza che verrà ritornata verso l'esterno per applicare la Fluent interface,
            sarebbe l'equivalente di un "return this"
         */
        return accumulatorInstance;
    };

    var get = function () {
        return value;
    };

    var accumulatorInstance = {
        get:get,
        add:add
    };

    return accumulatorInstance;
};

var accumulator = accumulatorFactory();
var secondAccumulator = accumulatorFactory(20);

secondAccumulator.add(accumulator.add(10).add(10).get());

console.log(secondAccumulator.get());