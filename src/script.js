const addButton = document.getElementById('add');
const clearButton = document.getElementById('clear');
const toDoTxt = document.getElementById('todoTextList');
const inputField = document.getElementById('input');
//max number of items the list can store
let numOfItems = 0;
const maxNumOfItems = 20;

addButton.addEventListener('click', () => {
    if(inputField.value !== ''){
        if(numOfItems < maxNumOfItems){
            const newTodo = document.createElement('li');
            newTodo.textContent = inputField.value;
            toDoTxt.appendChild(newTodo);
            inputField.value = '';
            numOfItems++;
        }
        else{
            alert("Max number of items to be listed has been reached!");
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