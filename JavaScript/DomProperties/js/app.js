// Window Object

let value;

value = document.all; // return HtmlCollection
value = document.all.length

// console.log(value);



// to use with forEach
const collections = Array.from(document.all);
collections.forEach(function(collection){
    // console.log(collection)
});


// or you can use for
const elements = document.all;
for(let i=0; i<elements.length; i++){
    // console.log(elements[i]);
}

// you can reach easily with that
document.body;
document.title;
document.head;
document.location.hostname;
document.URL;
document.scripts;
document.forms;

document.forms["form-name"]
document.forms[0].method


// getAttribute 
document.links[document.links.length-1].getAttribute("href")
document.links[document.links.length-1].getAttribute("id")
document.links[document.links.length-1].id
document.links[document.links.length-1].getAttribute("class")
document.links[document.links.length-1].className
document.links[document.links.length-1].classList


// Select element
document.getElementById("id-name");

document.getElementsByClassName("class-name");

document.getElementsByTagName("li");

document.querySelector(".class-name"); // firts element found

document.querySelectorAll("#id-name"); // return Node List

value = document.querySelectorAll("li");
value.forEach(function(val){
    console.log(val);
});


// Element Properties
const element = document.querySelector("#clear-todos");
element.id;
element.className;
element.classList;
element.textContent; // takes only text
element.innerHTML; // takes with Html tags
element.style;

// change element properties
element.className = "btn btn-primary";
element.style.color = "#000";
element.style.marginleft = "5px";
element.style.background = "#ddd";
element.target = "_blank";
element.textContent = "lorem ipsum";
element.innerHTML = "<span style='color: red'> lorem ipsum </span>";

let element2 = document.querySelectorAll("li:nth-child(odd)");


// Child Nodes
const todoList = document.querySelector(".list-group");

value = todoList.childNodes; // it also takes empty text

console.log(value)

// Children
value = todoList.children;
console.log(value);

todoList.firstElementChild;
todoList.lastElementChild; 

todoList.parentElement
console.log(todoList.parentElement.parentElement);

const todo = document.querySelectorAll(".list-group-item")[1];
console.log(todo.previousElementSibling);
todo.nextElementSibling.nextElementSibling;


// Create Element
const newBtn = document.createElement("a");
newBtn.className = "btn btn-dark";
newBtn.href = "www.google.com";
newBtn.target = "_blank";
// newBtn.textContent = "Go"; // its not safe

// safe way =>
newBtn.appendChild( document.createTextNode("text"));
console.log(newBtn);



// Delete element
const todos = document.querySelectorAll("li.list-group-item");
todos[1].remove();

todoList.removeChild(todos[3])
todoList.removeChild(todoList.lastElementChild)


// Change element - Replace
const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.appendChild( document.createTextNode("Todos"));

const oldElement = document.querySelector("#tasks-title");

const cardBody = document.querySelectorAll(".card-body")[1];
cardBody.replaceChild(newElement, oldElement);



// Add, Change, Delete Attribute
const todoInput = document.querySelector("#todo");
todoInput.classList.add("newClass");
todoInput.classList.remove("newClass");

console.log(todoInput.placeholder);
todoInput.getAttribute("placeholder"); 

todoInput.setAttribute("placeholder","Enter a new Todo") // add 

todoInput.hasAttribute("name") // is exist, return true or false

todoInput.removeAttribute("name");


// Dom Events

// DOMContentLoaded
document.addEventListener("DOMContentLoaded",loadFunction);

function loadFunction(e){
    console.log("page loaded");
}


todoInput.onfocus = function(){ // old version
    console.log("focused");
}

// focus
todoInput.addEventListener("focus",function(e){ // new version
    console.log("focused");
    console.log(e); // event objects
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.value);
});


// submit
const todoForm = document.querySelector("#todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(e){
    console.log("Submit Form");

    e.preventDefault(); // clear default attributes
}

// Keyboard Events

//keypress
document.addEventListener("keypress",run); // keypress = only letter and only number

// keydown
document.addEventListener("keydown",run); // all keys

document.addEventListener("keyup",run);

function run(e){
    console.log(e.key) // which key
}


// mouse events

// click
const title = document.querySelector("#tasks-title");

title.addEventListener("click",run);

//double click
title.addEventListener("dblclick",run);

// mouse down
title.addEventListener("mousedown",run);

// mouse up
title.addEventListener("mouseup",run);

// mouseover
title.addEventListener("mouseover",run); // works on every element

// mouseout 
title.addEventListener("mouseout",run);

// mouse enter && leave
cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);

function run(e){
    console.log(e.type);
}



// ınput events
const filterInput = document.querySelector("#filter");

// paste
filterInput.addEventListener("paste",functionName);

// copy
filterInput.addEventListener("copy",functionName);

// cut
filterInput.addEventListener("cut",functionName);

// select
filterInput.addEventListener("select",functionName);

function functionName(e){
    console.log(e.type) // which key
}



// event bubbling
document.querySelector(".container").addEventListener("click",function(){
    console.log("div container");
});

document.querySelector(".card-row").addEventListener("click",function(){
    console.log("card row");
});

document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
    console.log("card body");
});



// event capturing || delegation
const cardBody = document.querySelectorAll(".card-body")[1].addEventListener("click",run);

function run(e){
    console.log(e.target);
    if(e.target.className === "fa fa-remove"){
        console.log("delete event");
    }
}


// local storage && session storage

// session storage
const todoInput = document.querySelector("#todo");

const addBtn = document.querySelector("#addBtn");

// const delBtn = document.querySelector("#delBtn");
// const clearBtn = document.querySelector("#clearBtn");

addBtn.addEventListener("click",addItem);

// delBtn.addEventListener("click",deleteItem);
// clearBtn.addEventListener("click",clearItem);


function addItem(e){
    sessionStorage.setItem("key value",todoInput.value)
}

// function deleteItem(e){
//     sessionStorage.removeItem(todoInput.value);
// }

// function clearItem(e){
//     sessionStorage.clear();
// }


// local storage
localStorage.setItem("person","furkanaygur");
localStorage.setItem("age",22); // integers are always saved as strings

localStorage.getItem("person");

localStorage.clear();

if(localStorage.getItem("abc")===null){
    console.log("dont exist");
}
else {
    console.log("exist");
}

// local storage - array
const todos = ["furkan","aygur",22];

localStorage.setItem("todos",todos); // => write as string "furkan, aygur, 22"

localStorage.setItem("todos",JSON.stringify(todos)); // => write as array ["furkan","aygur","22"]

// get array item from local storage
console.log(JSON.parse(localStorage.getItem("todos")));