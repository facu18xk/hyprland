const creditCard = {
    number: "4823-6086-5262-5193",
    name: "PETER THIEL"
}
/**
 * Check if the credit card number is valid 
 * @param {*} number credit card number
 * @returns true if the card number is valid
 */
const checkCardNumber = number => {
    const CARD_EXP = /\D/g;
    let creditCardSetNumbers = number.replace(CARD_EXP, '');
    let numberLength = creditCardSetNumbers.length;
    return numberLength >= 13 && numberLength <= 19 ? true : false;
}
/**
 * Check if the user name is a valid name for a credit card
 * @param {*} name 
 */
const checkName = name => {
    name = name.replace(" ", "");
    const NAME_REGEX = /^[a-zA-Z]+$/;
    if (NAME_REGEX.test(name)) return true;
    return false;
}
/**
 * Check if the credit card is valid
 * @param {*} cardObj 
 */
function checkCard(cardObj) {
    if (!checkCardNumber(cardObj.number)) console.log("Card number is not valid");
    if (!checkName(cardObj.name)) console.log("Card Name not valid");
}
checkCard(creditCard);