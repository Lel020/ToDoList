const addButton = document.getElementById('add');
const clearButton = document.getElementById('clear');
const toDoTxt = document.getElementById('todoTextList');
const inputField = document.getElementById('input');

let numOfItems = 0;
const maxNumOfItems = 20;
const maxCharacters = 42;

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

inputField.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        event.preventDefault();
        addButton.click();
    }
});

clearButton.addEventListener('click', () => {
    if(confirm("Are you sure you want to clear your List?")){
        inputField.value = '';
        toDoTxt.textContent = '';
    }
    else{
        console.error("An ERROR has occurred");
    }
});