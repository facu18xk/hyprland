
//Tell why not how
/** Bad comment example */

function incrementI(i) {
    i++;
    return i;
}

/** Better comment example */
// Increment in one i, to move the next element 
function incrementI(i) {
    i++;
    return i;
}
//** Best case scenario, not comment at all */

function moveToNextElement(index) {
    index++;
    return index;
}
/** Use nouns for name variables, and verbs for functions*/
let userName = "Nick";
// this is wrong
let isSelected = true
//Use verbs only for functions 

/** Be consistent with your comments */
const getName = () => userName;
//Wrong
const fetchUseScore = () => userScore;

// Use always the same verb and name for referring the same object
const getUserName = () => userName;
const getUserScore = () => userScore;