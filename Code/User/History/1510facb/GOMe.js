const removeFromArray = function (array, elementToRemove) {
    const ELEMENTS_TO_REMOVE = 1;
    let elementIndex = array.indexOf(elementToDelete);
    return array.splice(ELEMENTS_TO_REMOVE, elementIndex);
};

// Do not edit below this line
module.exports = removeFromArray;
