
const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'toDos'

function paintDoto(text) {
    console.log(text);
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value
    paintDoto(currentValue);
}

function loadToDos() {

    const toDos = localStorage.getItem(TODOS_LS);

    if(toDos === null){

    } else {

    }
    
}

function init() {
    loadToDos();
    todoForm.addEventListener("submit", handleSubmit)

}


init();