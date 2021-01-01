const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secoundCardBody = document.querySelectorAll(".card-body")[1];
const filterInput = document.querySelector("#filter");
const clearBtn = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",LoadAllTodosToUI);
    secoundCardBody.addEventListener("click",deleteTodo);
    filterInput.addEventListener("keyup",filterTodos);
    clearBtn.addEventListener("click", clearAllTodos);
}

// Add Todo
function addTodo(e){
    const newTodo = todoInput.value.trim();
    if (newTodo === ""){
        showAlert("danger", "Enter a Todo please...","");
    }
    else {
        let todos = getTodosFromStorage();
        let flag = true
        todos.forEach(function(todo){
            if(newTodo === todo){
                showAlert("warning", "already exists!",newTodo);
                flag = false
            }
        });
        if(flag){
            addTodoToUI(newTodo);
            addTodoToStorage(newTodo);
            showAlert("success", "Successfully added.",newTodo);
        }
    }
   
    e.preventDefault();
}

// Add to UI
function addTodoToUI(newTodo){
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value = "";
}

// show Alert
function showAlert(type, message, tName= "Todo"){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = `${tName} ` + message;

    firstCardBody.appendChild(alert);

    setTimeout(function(){
        alert.remove();
    },1500);
}

// Get todos from storage
function getTodosFromStorage(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
      todos = JSON.parse(localStorage.getItem("todos"));  
    }
    return todos;
}

// Add to Storage
function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

// Load todos to UI
function LoadAllTodosToUI(){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    });

}

// delete todo
function deleteTodo(e){
    if (e.target.className === "fa fa-remove"){
        const tName = e.target.parentElement.parentElement.textContent;
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent)
        showAlert("success", "Successfully deleted",tName);
    }
}

// delete todo from storage
function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo, index){
        if(todo === deletetodo){
            todos.splice(index,1); // delete
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

// filter todos
function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLocaleLowerCase();
        if(text.indexOf(filterValue) === -1){
            listItem.setAttribute("style","display: none !important");
        }
        else {
            listItem.setAttribute("style","display: block");
        }
    });
}

// clear all todos
function clearAllTodos(e){
    if (confirm("Are you sure ?")){
        while(todoList.firstElementChild != null)
        {
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
}