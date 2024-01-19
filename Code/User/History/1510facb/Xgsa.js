const removeFromArray = function (array, elementToRemove) {
    const ELEMENTS_TO_REMOVE = 1;
    let elementIndex = array.indexOf(elementToRemove);
    return array.splice(elementIndex, ELEMENTS_TO_REMOVE);
};
removeFromArray(["a", "b", "c", "d", "a"]);
// Do not edit below this line
module.exports = removeFromArray;
