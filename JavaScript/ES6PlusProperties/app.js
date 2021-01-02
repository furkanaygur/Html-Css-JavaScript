// ES6+ Properties

// arrow function
const hello = (name,lastname) => {
    console.log("hello",name,lastname);
}

// shortes => const hello = (name,lastname) => console.log("hello",name,lastname);

const cube = (x) => {
    return x*x*x;
}

// shortes =>  const cube = x => x*x*x;
console.log(cube(3));


// Destructing
let num1,num2;
arr = [100,200,300,400];

[num1, num2] = arr;
// => num1 = arr[0];
//    num2 = arr[1];



// Object Destructing
const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
}

const {a,b,e} = numbers; 
console.log(a,b,e); // a = 10, b= 20, e= 50

const {a:number1,c:number3,e:number5} = numbers;
console.log(number1,number3,number5); // numbers1 = 10, number3 = 30, numbers5 = 50



// Function Destructing
const getLangs = () => ["python","java","c"];

const [lang1,lang2,lang3] = getLangs();
console.log(lang1,lang2,lang3);


// object
const person = {
    "name":"furkan",
    "surname":"aygur",
    "age":22,
    showInfos: () => console.log("Show infos")
}
const {name:n, surname:s, age:age, showInfos:infos} = person;
console.log(n,s,age);
infos();


// Spread operator
const langs = ["python","js","c++"];

//console.log(langs[0],langs[1],langs[2]) // =>
console.log(...langs);

const langs2 = ["java","c#",...langs];
console.log(langs2)

const numbers = [1,2,3,4,5,6];
const [a,b,...numbers2] = numbers
console.log(a,b,numbers2)

const addNumbers = (x,y,z) => console.log(x+y+z);
const nums = [100,200,300];
addNumbers(...nums);


//For in && For of

// for in
const person = {
    "name":"furkan",
    "surname":"aygur",
    "age":22
}

for(let properties in person){
    console.log(properties, person[properties]);
}

//
const langs = ["python","java","c++"];
for(let index in langs){
    console.log(index, langs[index]);
}

// 
const name = "furkan";
for(let i in name){
    console.log(i,name[i]);
}

// for of not using with objects
const langs = ["python","java","c++"];
for(let i of langs){
    console.log(i);
}

const name = "furkan";
for(let j of name){
    console.log(j);
}



// Maps: key - value
let myMap = new Map();

const key1= "furkan";
const key2 = {a:10,b:20};
const key3 = () => 2;

// set
myMap.set(key1,"String value");
myMap.set(key2,"Object Literal value");
myMap.set(key3,"Function value")
 
// get
console.log(myMap.get(key3));

// Map size
console.log(myMap.size)

// map foreach
myMap.forEach(function(value,key){
    console.log(key,value);
});

// for of
for(let [key,value] of myMap){
    console.log(key,value);
}

// map keys
for(let key of myMap.keys()){
    console.log(key);
}

// map value
for(let value of myMap.values()){
    console.log(value);
}

// from array to map
const array = [["key1","value1"],["key2","value2"]];
const lastMap = new Map(array);
console.log(lastMap);


// from map to array
const lastArray = Array.from(lastMap);
console.log(lastArray);



// Sets
const mySet = new Set();
mySet.add(100);
mySet.add(100);
mySet.add("furkan");
mySet.add(3.14)

const mySet2 = new Set([100,3.14,"furkan"]);

console.log(mySet.size);

mySet.delete(3.14);
console.log(mySet);

// Has  (is it exist)
console.log(mySet.has("furkan"));

// forEach
mySet.forEach(function(value){
    console.log(value);
});

// for 
for(let value of mySet){
    console.log(value);
}

// from set to array
const arraay = Array.from(mySet);
console.log(arraay);