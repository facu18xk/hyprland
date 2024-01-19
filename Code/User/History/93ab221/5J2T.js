const secretObj = {
    number: "4823-6086-5262-5193",
    name: "PETER THIEL"
}

//check if the credit card number is valid
const checkCardNumber = number => {
    const cardExp = /\D/g;
    let creditCardSetNumbers = number.replace(cardExp, '');
    console.log(creditCardSetNumbers);
    return creditCardSetNumbers.length === 4 ? true : false;
}
/**
 * Check if the credit card is valid
 * @param {*} cardObj 
 */
function checkCard(cardObj) {
    if (!checkCardNumber(cardObj.number)) console.log("Card number is not valid");
}
checkCard(secretObj);