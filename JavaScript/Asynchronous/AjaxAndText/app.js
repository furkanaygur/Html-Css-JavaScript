document.getElementById("btn").addEventListener("click",function(){

    const xhr = new XMLHttpRequest();

    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
    // 505: "Internal Server Error"

    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready


    // xhr.onreadystatechange = function(){
    //     if(this.status == 200 && this.readyState == 4){
    //         console.log(this.responseText);
    //     }
    // }
    // =>
   
    xhr.onload = function(){
        if(this.status == 200){
           document.querySelector("#div").textContent =this.responseText;
        }
    }

    xhr.open("GET","example.txt",true);
    xhr.send();
});