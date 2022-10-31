const sumAll = function(numOne, numTwo) {
    let sum = 0;
    
    if (numOne < numTwo){
        for (let i = 0; i < numTwo; i++){
            sum += (numOne + i);
        }
    }else if (numOne > numTwo){
        for (let i = 0; i < numOne; i++){
            sum += (numTwo + i);
        }
    }else {
        sum = numOne;
    }
    
    return sum;
    
};

//for testing
//sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;
