const removeFromArray = function (array, elementToRemove) {
    const ELEMENTS_TO_REMOVE = 1;
    let elementIndex = array.indexOf(elementToRemove);
    array.splice(elementIndex, ELEMENTS_TO_REMOVE);
    return array;
};
let result = removeFromArray(["a", "b", "c", "d", "a"], "b");
console.log(result);
// Do not edit below this line
module.exports = removeFromArray;