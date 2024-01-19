
const list = document.querySelector('.list');
const button = document.querySelector('.button');
const input = document.querySelector('.input');
/**
 * Delete the list item
 * @returns the button node
 */
const deleteButton = () => {
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener('click', (e) => {
        list.removeChild(e.target.parentNode);
    })
    return deleteBtn;
}
// Create a function that create a list item with the delete button and its listener
const createListElement = () => {
    alert(input.value);
    if (input.value.trim() == "") return alert("The input is empty");
    let li = document.createElement('li');
    li.innerText = input.value;
    li.appendChild(deleteButton());
    list.appendChild(li);
}
//add listener to the button that when its clicked add the new list item with the value of the input, if it's not empty 
button.addEventListener('click', createListElement);