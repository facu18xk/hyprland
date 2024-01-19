const secretObj = {
    number: "4823-6086-5262-5939",
    name: "PETER THIEL"
}
//check if the credit card number is valid
const checkCardNumber = number => {
    if (typeof number === "number")
        number = number.toString();
}
const cardExp = /\d{4}/g;
let creditCardSetNumbers = secretObj.number.match(cardExp);
let resultMessage = result.length === 4 ? "Valid Card" : "Invalid card";


console.log(resultMessage);
console.log(result);