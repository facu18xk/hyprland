const secretObj = {
    number: "4823-6086-5262-5939",
    name: "PETER THIEL"
}
const cardExp = /\d{4}/g;
let result = secretObj.number.match(cardExp);
let resultMessage = result.length === 4 ? "Valid Card" : "Invalid card";
console.log(resultMessage);
console.log(result);