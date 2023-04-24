const addButton = document.getElementById('add');
const toDoContainer = document.getElementById('todoTextList');
const inputField = document.getElementById('input');

addButton.addEventListener('click', () => {
    const paragraph = document.createElement('p');
    toDoContainer.appendChild(paragraph);
});