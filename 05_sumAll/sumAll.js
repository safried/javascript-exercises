const sumAll = function(numOne, numTwo) {
    let sum = 0;

    for (let i = 0; i < numTwo; i++){
        sum += (numOne + i);
    }
    return sum;
    
};

//for testing
//sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;
