
const list = document.querySelector('.list');
const button = document.querySelector('.button');
const input = document.querySelector('.input');
//create a function for the delete button 
// Create a function that create a list item with the delete button and its listener
const createListElement = () => {
    let listText = input;
    console.log(input);
}
//add listener to the button that when its clicked add the new list item with the value of the input, if it's not empty 
button.addEventListener('click', createListElement);