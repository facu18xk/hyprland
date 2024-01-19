// const buttons = document.querySelector('.buttons');
// const input = document.querySelector('.input');
// const carry = document.querySelector('.carry');

/**
 * When a button is clicked check if it's a number or a operation 
 */
const checkIfNumber = ev => isNaN(parseFloat(ev.target)) ? false : true;
const ev = {
    target: "1",
}
console.log(checkIfNumber(ev));