const removeFromArray = function(inputArray, ...elementsToRemove) {
    let newArray = [];
    let inputArrayLength = inputArray.length;
    const elementsToRemoveArray = elementsToRemove;
    let elementsToRemoveArrayLength = elementsToRemove.length;

    outer: for (let i = 0; i < inputArrayLength; i++){
        for (let j = 0; j < elementsToRemoveArrayLength; j++){
            if (inputArray[i] === elementsToRemoveArray[j]){
                continue outer;
            }
        }newArray.push(inputArray[i]);
    }
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
