const removeFromArray = function (array, ...elementsToRemove) {
    const ELEMENTS_TO_REMOVE = 1;
    elementsToRemove.forEach((elementToRemove) => {
        let elementIndex = array.indexOf(elementToRemove);
        console.log(elementIndex);
        array.splice(elementIndex, ELEMENTS_TO_REMOVE);
    })
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;
