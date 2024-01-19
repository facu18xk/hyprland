const secretObj = {
    number: "4823-6086-5262-5939"
}
const cardExp = /\d{4}/g;
let result = secretObj.number.match(cardExp);
console.log(result);