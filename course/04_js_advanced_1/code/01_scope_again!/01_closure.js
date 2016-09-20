var accumulatorFactory = function (initialValue) {
    var value = initialValue || 0;

    var add = function (i) {
        value += parseInt(i,10) || 0;
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