const reverseString = function(inputString) {
    let outputString = "";
    let inputStringLength = inputString.length;
    for (let i = (inputStringLength-1); i >= 0; i--){
        outputString += inputString[i];
    }
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
