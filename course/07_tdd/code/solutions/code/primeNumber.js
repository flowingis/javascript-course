const isPrimeNumber = (number) => {
    if(!number || number <= 1){
        return false;
    }else{
        for(let i = 2;i <= number - 1;i++){
            if(number % i === 0){
                return false;
            }
        }

        return true;
    }

    return true;
};

const firstPrimeNumbers = (limit) => {
    if(limit < 1){
        return [];
    }

    if(limit === 1){
        return [2];
    }

    const toReturn = [];
    let current = 2;

    do{
        if(isPrimeNumber(current)){
            toReturn.push(current);
        }
        current++;
    }while(toReturn.length < limit);

    return toReturn;
};

module.exports = {
    isPrimeNumber,
    firstPrimeNumbers
};