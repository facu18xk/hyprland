const removeFromArray = function (array, elementToRemove) {
    const ELEMENTS_TO_REMOVE = 1;
    let elementIndex = array.indexOf(elementToRemove);
    array.splice(elementIndex, ELEMENTS_TO_REMOVE);
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;
