// Javascript Object Oriented Programing


// Constructor
function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = () => {
        console.log(this.name, this.age, this.salary);
    }
}

const emp1 = new Employee("furkan",22,5000);
const emp2 = new Employee("aygur",22,10000);

emp1.showInfos();
emp2.showInfos();


// Prototype
function Employee(name,age){
    this.name = name;
    this.age = age;
}

Employee.prototype.showInfos = function() {
    console.log(this.name, this.age);
}

const emp1 = new Employee("furkan",22,5000);
const emp2 = new Employee("aygur",22,10000);

emp2.showInfos();


// Object Create
const obj = {
    test1:function(){
        console.log("test1");
    },
    test2:function(){
        console.log("test2");
    }
}

const emp = Object.create(obj);
emp.name = "furkan";
emp.showName = function() {
    console.log(this.name);
}

emp.showName();
emp.test1();


// prototype way
function Person(){
    // 
}

Person.prototype.test1 = function(){
    console.log("test1");
}


function Player(name,age){
    this.name = name;
    this.age = age;
}

Player.prototype = Object.create(Person.prototype);
Player.prototype.myTest = function(){
    console.log("my test");
}

const player1 = new Player("furkan",22);
player1.test1();
player1.myTest();



// Call & Apply & Bind

const obj1 = {
    num1:10,
    num2:20
}

const obj2 = {
    num1:30,
    num2:40
}

function addNums(num3,num4){
    console.log(this.num1 + this.num2 + num3 + num4);
}
// call
addNums.call(obj1,100,200);
addNums.call(obj2,50,50);
console.log("----");
// apply
addNums.apply(obj1,[100,200]);
addNums.apply(obj2,[50,50]);

// bind

function getTotal(num3,num4){
    return this.num1 + this.num2 + num3 + num4;
}

const copyFunc = getTotal.bind(obj1);
console.dir(copyFunc); // bound
console.log(copyFunc(100,100));



// Inheritance with prototype
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.showInfos = function(){
    console.log(this.name, this.age);
}

const person1 = new Person("furkan",22);
person1.showInfos();


function Employee(name,age,salary){
    // this.name = name;
    // this.age = age; 
    // =>
    Person.call(this,name,age);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.showInfos = function(){ // overriding
    console.log(this.salary, this.name, this.age); 
}
const emp = new Employee("aygur",22,1000);
emp.showInfos();



// Classes with ES6   Syntatic Sugar

class Employee {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log(this.name, this.age);
    }
}

const emp = new Employee("furkan",22);
emp.showInfos();


// static methods
class Mathh{
    // cube(x){
    //     console.log(x*x*x);
    // }
    // =>
    static cube(x){  // static methods no write to prototype
        console.log(x*x*x);
    }
    plus(x){
        console.log(x+x);
    }
}
// you can't use like tihs if method is static  =>
// const math = new Mathh();
// math.cube(3);
// Only when the method is static you can use it like this =>
Mathh.cube(3);

const math = new Mathh();
math.plus(3);


// // Inheritance with ES6   Syntatic Sugar

class Person{ // SuperClass || BaseClass
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    showInfos() {
        console.log(this.name, this.age);
    }
}

class Employee extends Person{ // DerivedClass || SubClass || ChilClass
    constructor(name,age,salary){
        // Person.call(this,name,age);
        // =>
        super(name,age);
        this.salary = salary;
    }

    showInfos(){ // Overriding
        console.log(this.salary, this.name, this.age);
    }
}

const emp = new Employee("furkan",22,20000);
emp.showInfos()