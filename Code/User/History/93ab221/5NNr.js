const secretObj = {
    number: "4823-6086-5262-5939",
    name: "PETER THIEL"
}
//check if the credit card number is valid
const checkCardNumber = number => {
    if (typeof number === "number")
        number = number.toString();
    const cardExp = /\d{4}/g;
    let creditCardSetNumbers = secretObj.number.match(cardExp);
    return result.length === 4 ? true : false;
}
function checkCard(cardObj) {
    if (!checkCard(cardObj.number)) console.log("Card number is not valid");
}
console.log(resultMessage);
console.log(result);