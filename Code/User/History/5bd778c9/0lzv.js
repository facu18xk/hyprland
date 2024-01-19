// const buttons = document.querySelector('.buttons');
// const input = document.querySelector('.input');
// const carry = document.querySelector('.carry');
const OPERATIONS = ""
/**
 * When a button is clicked check if it's a number or a operation 
 */
const checkIfNumber = ev => isNaN(parseFloat(ev.target)) ? false : true;
/**
 * Check if the entered value is a operation
 */
const checkIfOperation = ev =>  