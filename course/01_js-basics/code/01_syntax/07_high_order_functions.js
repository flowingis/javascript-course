var findEvenNumbers = function(values) {
    var toReturn = [];
    for (var index = 0; index < values.length; index++) {
        const element = values[index];
        if(element % 2 === 0){
            toReturn.push(element)
        } 
    }
    return toReturn;
}

console.log(findEvenNumbers([1,2,3,4])) // 2,4

/*
    In JavaScript è possibile creare che accettano funzioni come parametro e quindi è possibile creare funzioni composte, altrimente dette High Order Functions
*/
var isEven = function(number) {
    return number % 2 === 0;
}

var filter = function(array, test) {
    var toReturn = [];
    for (var index = 0; index < array.length; index++) {
        const element = array[index];
        if(test(element)){
            toReturn.push(element)
        } 
    }
    return toReturn;
}

var findEvenNumbers2 = function(array) {
    return filter(array, isEven);
}

console.log(findEvenNumbers2([1,2,3,4])) // 2,4

/*
    Creare piccole funzioni componibili aiuta a spezzare e testare meglio il problema
*/

var not = function(test){
    return function(element) {
        return !test(element);
    };
};

var find = function(array, test) {
    for (var index = 0; index < array.length; index++) {
        const element = array[index];
        if(test(element)){
            return element
        } 
    }
}

var findOddNumbers = function(array) {
    return filter(array, not(isEven));
}

var findFirstOddNumber = function(array) {
    return find(array, not(isEven));
}

console.log(findOddNumbers([1,2,3,4])) // 1,3

console.log(findFirstOddNumber([1,2,3,4])) // 1

