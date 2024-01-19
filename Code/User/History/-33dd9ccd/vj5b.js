
const list = document.querySelector('.list');
const button = document.querySelector('.button');
const input = document.querySelector('.input');
/**
 * Delete the list item
 * @returns the button node
 */
const deleteButton = () => {
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener('click', (e) => {
        list.removeChild(e.target.parentNode);
        input.focus();
    })
    return deleteBtn;
}
const clearInput = input => input.value = "";
/**
 * Create the list element, and append to the ul, and clean the input field and focused it 
 * 
 */
const createListElement = () => {
    if (input.value.trim() == "") return alert("The input is empty");
    let li = document.createElement('li');
    li.innerText = input.value;
    li.appendChild(deleteButton());
    list.appendChild(li);
    clearInput(input);
    input.focus();
}
//add listener to the button that when its clicked add the new list item with the value of the input, if it's not empty 
button.addEventListener('click', createListElement);