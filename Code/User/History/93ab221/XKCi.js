const secretObj = {
    number: "4823-6086-5262-51939",
    name: "PETER THIEL"
}
//check if the credit card number is valid
const checkCardNumber = number => {
    if (typeof number === "number")
        number = number.toString();
    const cardExp = /\d{4}/g;
    let creditCardSetNumbers = secretObj.number.match(cardExp);
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
