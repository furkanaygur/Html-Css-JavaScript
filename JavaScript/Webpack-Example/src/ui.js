export class UI {
    constructor() {
        this.employeesList = document.getElementById("employees")
        this.addBtn = document.getElementById("add-employee")
        this.updateBtn = document.getElementById("update")
        this.nameInput = document.getElementById("name")
        this.departmentInput = document.getElementById("department")
        this.salaryInput = document.getElementById("salary")
    }

    addAllEmployesToUI(employees) {
        let result = ""
        employees.forEach(employee => {
            result += `
                <tr>
                    <td>${employee.id}</td>         
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                    <td><a href="#" id = "update-employee" class= "btn btn-warning">Update</a></td> 
                    <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Delete</a></td>
                </tr>
                `
        });

        this.employeesList.innerHTML = result
    }

    addEmployesToUI(employee) {
        this.employeesList.innerHTML += `
                    <tr>
                    <td>${employee.id}</td>         
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                    <td><a href="#" id = "update-employee" class= "btn btn-warning">Update</a></td> 
                    <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Delete</a></td>
                </tr>
                `
    }


    clearInputs() {
        this.nameInput.value = ""
        this.departmentInput.value = ""
        this.salaryInput.value = ""
    }

    deleteEmployeeFromUI(element) {
        element.remove()
    }


    toggleUpdateBtn(targetEmployee) {
        if (this.updateBtn.style.display === "none") {
            this.updateBtn.style.display = "block"
            this.addBtn.style.cursor = "not-allowed"
            this.addBtn.disabled = true
            this.addEmplooyeInfoToInputs(targetEmployee)
        }
        else {
            this.updateBtn.style.display = "none"
            this.addBtn.style.cursor = "pointer"
            this.addBtn.disabled = false
            this.clearInputs()
        }

    }


    addEmplooyeInfoToInputs(target) {
        const children = target.children
        this.nameInput.value = children[1].textContent
        this.departmentInput.value = children[2].textContent
        this.salaryInput.value = children[3].textContent
    }

    updateEmployeeOnUI(employee, parent) {
        parent.innerHTML = `
        <tr>
            <td>${employee.id}</td>         
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-warning">Update</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Delete</a></td>
        </tr>
        `
    }
}