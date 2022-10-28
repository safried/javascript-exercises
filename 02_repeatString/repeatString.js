const repeatString = function(inputString, inputNumber) {
    let newString = inputString;
    for (let i = 1; i < inputNumber; i++){
        newString += inputString;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
