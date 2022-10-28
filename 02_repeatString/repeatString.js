const repeatString = function(inputString, inputNumber) {
    if (inputNumber < 0){
        return "ERROR";
    }else{
        let newString = "";
        for (let i = 0; i < inputNumber; i++){
        newString += inputString;
        }
        return newString;
    }
};

// Do not edit below this line
module.exports = repeatString;
