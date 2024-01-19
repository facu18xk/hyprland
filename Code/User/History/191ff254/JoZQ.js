
/** Bad comment example */

function incrementI(i) {
    i++;
    return i;
}
/** Better comment example */
// Increment in one i, to move the next element 
function incrementI(i) {
    i++;
    return i
}
//** Best case scenario, not comment at all */

function moveToNextElement(index) {
    index++;
    return index;
}