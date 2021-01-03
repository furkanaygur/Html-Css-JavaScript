document.getElementById("ajax").addEventListener("click",getAllEmployees);

function getAllEmployees(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","employees.json",true);
    
    xhr.onload = function(){
        let list = document.getElementById("employees");

        if(this.status == 200){
            const employees = JSON.parse(this.responseText);
            employees.forEach(element => {
                list.innerHTML += `
                    <tr style="text-align:center;">
                        <td>${element.name}</td>
                        <td>${element.department}</td>
                        <td>${element.age}</td>
                    </tr>
                `
            });
             
        }
    }
    
    xhr.send();
}