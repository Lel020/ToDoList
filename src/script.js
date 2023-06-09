const addButton = document.getElementById('add');
const clearButton = document.getElementById('clear');
const toDoTxt = document.getElementById('todoTextList');
const inputField = document.getElementById('input');

let numOfItems = 0;
const maxNumOfItems = 20;
const maxCharacters = 100;

// Check if there are any items in local storage
if(localStorage.getItem('todos')){
  toDoTxt.innerHTML = localStorage.getItem('todos');
  numOfItems = toDoTxt.children.length;
}

//When user clicks on the 'add' button
addButton.addEventListener('click', () => {
    const inputValue = inputField.value;
    const maxInputChar = inputValue.length;

    if(inputField.value !== ''){
        if(numOfItems < maxNumOfItems){
            if(maxInputChar <= maxCharacters){
                const newTodo = document.createElement('li');
                newTodo.textContent = inputField.value;
                toDoTxt.appendChild(newTodo);
                inputField.value = '';
                numOfItems++;

                // Save the updated list to local storage
                localStorage.setItem('todos', toDoTxt.innerHTML);
            }
            else{
                alert("Max character limit: 42 with spaces (inclusive)");
            }
        }
        else{
            alert("Max number of items: 20");
        }
    }
});

//Instead if using the add buton, user can also just press ENTER
inputField.addEventListener('keydown', event => {
    if(event.key === 'Enter'){
        event.preventDefault();
        addButton.click();
    }
});

//When user presses the 'clear' button
clearButton.addEventListener('click', () => {
    if(confirm("Are you sure you want to clear your List?")){
        inputField.value = '';
        toDoTxt.textContent = '';
        numOfItems = 0;

        // Remove the list from local storage
        localStorage.removeItem('todos');
    }
    else{
        console.error("An ERROR has occurred");
    }
});
