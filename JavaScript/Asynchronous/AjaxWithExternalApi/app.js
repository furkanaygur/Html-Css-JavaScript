const btn = document.getElementById("convert");

btn.addEventListener("click",function(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangeratesapi.io/latest");

    xhr.onload = function(){
        if(this.status){
            const response = JSON.parse(this.responseText);
            const euroValue = document.getElementById("amount").value;
            const tltxt = document.getElementById("tl"); 
            tltxt.value = Number(euroValue) * Number(response.rates.TRY);
            
        }
    }

    xhr.send();
});