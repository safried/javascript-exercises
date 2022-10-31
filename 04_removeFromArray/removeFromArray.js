const removeFromArray = function(inputArray, ...elementsToRemove) {
    let newArray = [];
    let inputArrayLength = inputArray.length;

    for (let i = 0; i < inputArrayLength; i++){
        if (inputArray[i] == elementsToRemove){
            continue;
        }else {
            newArray.push(inputArray[i]);
        }
    }
    return newArray;
}

//to aid in debugging
//removeFromArray([1, 2, 3, 4], 3);
//console.log(newArray);

// Do not edit below this line
module.exports = removeFromArray;
