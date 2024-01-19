
const list = document.querySelector('.list');
const button = document.querySelector('.button');
const listText = document.querySelector('.input').value;
//create a function for the delete button 
// Create a function that create a list item with the delete button and its listener
const createListElement = () => {
    if (listText != " ") return alert("The input is empty");
    let li = document.createElement('li');
}
//add listener to the button that when its clicked add the new list item with the value of the input, if it's not empty 
button.addEventListener('click', createListElement);