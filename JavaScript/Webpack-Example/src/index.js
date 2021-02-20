
import { Request } from "./requests"
import { UI } from "./ui"

// elems 
const form = document.getElementById("employee-form")
const nameInput = document.getElementById("name")
const departmentInput = document.getElementById("department")
const salaryInput = document.getElementById("salary")
const emloyeesList = document.getElementById("employees")
const updateBtn = document.getElementById("update")

// elems end

const request = new Request("http://localhost:3000/employees")
const ui = new UI()

let updateState = null

eventListeners()

function eventListeners() {
    document.addEventListener("DOMContentLoaded", getAllEmployees)
    form.addEventListener("submit", addEmployee)
    emloyeesList.addEventListener("click", updateOrDelete)
    updateBtn.addEventListener("click", updateEmployee)
}

function getAllEmployees() {
    request.get().then(employee => {
        ui.addAllEmployesToUI(employee)
    }).catch(err => console.log(err))
}

function addEmployee(e) {
    const employeeName = nameInput.value.trim()
    const employeeDepartment = departmentInput.value.trim()
    const employeeSalary = salaryInput.value.trim()

    if (employeeName === "" || employeeDepartment === "" || employeeSalary === "") {
        alert("please fill in the all textboxes ")
    }
    else {
        request.post({ name: nameInput.value, department: departmentInput.value, salary: Number(salaryInput.value) })
            .then(employee => {
                ui.addEmployesToUI(employee)
            }).catch(err => console.log(err))
    }

    ui.clearInputs()
    e.preventDefault()
}

function updateOrDelete(e) {

    if (e.target.id === "delete-employee") {
        deleteEmployee(e.target)
    }
    else if (e.target.id === "update-employee") {
        updateEmployeeController(e.target.parentElement.parentElement)
    }

}

function deleteEmployee(targetEmployee) {
    const id = targetEmployee.parentElement.parentElement.firstElementChild.textContent
    request.delete(id).then(message => {
        ui.deleteEmployeeFromUI(targetEmployee.parentElement.parentElement)
    }).catch(err => console.log(err))
}

function updateEmployeeController(targetEmployee) {
    ui.toggleUpdateBtn(targetEmployee)
    if (updateState === null) {
        updateState = {
            updateId: targetEmployee.children[0].textContent,
            updateParent: targetEmployee
        }
    }
    else {
        updateState = null
    }
}

function updateEmployee() {
    if (updateState) {
        const data = { name: nameInput.value.trim(), department: departmentInput.value.trim(), salary: salaryInput.value.trim() }
        request.put(updateState.updateId, data).then(updatedEmployee => {
            ui.updateEmployeeOnUI(updatedEmployee, updateState.updateParent)
        })
            .catch(err => console.log(err))
        ui.toggleUpdateBtn()
    }
}