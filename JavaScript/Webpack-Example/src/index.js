import { Request } from "./requests"

// elems 
const form = document.getElementById("employee-form")
const nameInput = document.getElementById("name")
const departmentInput = document.getElementById("department")
const salaryInput = document.getElementById("salary")
const emloyeesList = document.getElementById("employees")
const updateBtn = document.getElementById("update")

// elems end

const request = new Request("http://localhost:3000/employees")

// request.get().then(employee => console.log(employee)).catch(err => console.log(err))

// request.post({ name: "Enes Aygur", department: "Computer Teacher", salary: 4000 })
//     .then(employee => console.log(employee)).catch(err => console.log(err))

// request.put(1, { name: "Furkan Aygur", department: "Software Engineer", salary: 6000 }).then(employee => console.log(employee))
//     .catch(err => console.log(err))

request.delete(3).then(message => console.log(message)).catch(err => console.log(err))