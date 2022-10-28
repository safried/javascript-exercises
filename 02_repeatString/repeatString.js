const repeatString = function(inputString, inputNumber) {
    let newString = "";
    for (let i = 0; i < inputNumber; i++){
        newString += inputString;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
