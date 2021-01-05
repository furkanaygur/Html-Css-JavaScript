
// Text Files
function getTextFile(){
    fetch("text.txt").then(response => response.text())
    .then(data => console.log(data)) 
    .catch(err => console.error(new Error(err)));
}

getTextFile();


// Json Files
function getJsonFile(){
    fetch("jsonfile.json").then(response => response.json())
    .then(data => console.log(data)).catch(err => console.error(new Error(err)));
}

getJsonFile();


// External api
function getExternalApi(){
    fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json()).then(data => console.log(data.rates.TRY))
    .catch(err => console.error(new Error(err)));
}

getExternalApi();