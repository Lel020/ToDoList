const addButton = document.getElementById('add');
const clearButton = document.getElementById('clear');
const toDoTxt = document.getElementById('todoTextList');
const inputField = document.getElementById('input');

addButton.addEventListener('click', () => {
    const paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoTxt.appendChild(paragraph);
});

clearButton.addEventListener('click', () => inputField.value = '');