
const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'toDos'

const todos = [];

function saveStroage() {
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function paintDoto(text) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    const span = document.createElement("span");
    const newId = todos.length+1
    deleteButton.innerText = "❌";
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deleteButton);
    li.id = newId;
    todoList.appendChild(li);

    todos.push(
        {
            text:text,
            id:newId
        }
    );

    saveStroage();

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value
    paintDoto(currentValue);
}

function loadToDos() {
    const loadTodos = localStorage.getItem(TODOS_LS);
    if(loadTodos !== null){
        const parsedTodo = JSON.parse(loadTodos);
        parsedTodo.forEach((todo)=>{
            paintDoto(todo.text);
        })
    }
    
}

function init() {
    loadToDos();
    todoForm.addEventListener("submit", handleSubmit)

}


init();