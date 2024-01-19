// const buttons = document.querySelector('.buttons');
// const input = document.querySelector('.input');
// const carry = document.querySelector('.carry');

/**
 * When a button is clicked check if it's a number or a operation 
 */
const checkIfNumber = ev => (typeof parseFloat(ev.target) == 'number') ? true : false;
const ev = {
    target: 12.3,
}
console.log(console.log(ev.target));