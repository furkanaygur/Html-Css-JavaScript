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

keypress
document.addEventListener("keypress",run); // keypress = only letter and only number

// keydown
document.addEventListener("keydown",run); // all keys

document.addEventListener("keyup",run);


function run(e){
    console.log(e.key) // which key
}
