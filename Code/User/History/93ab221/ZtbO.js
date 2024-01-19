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


x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1xmf6yo x1e56ztr x540dpk x1m39q7l x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1