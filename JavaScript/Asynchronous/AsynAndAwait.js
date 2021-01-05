// Async & Await
async function getData(data){
    let promise =  new Promise(resolve =>{
       setTimeout(()=> {
            resolve(data);
       },2500);
    });

    let response = await promise;
    return response;
}

getData("furkan").then(data => console.log(data));

// Example
async function testData(data){
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(typeof data === "string"){
                resolve(data);
            }
            else {
                reject(new Error("Value isn't a string"));
            } 
        });
    });

    let response = await promise;
    return response;
}

testData("furkan").then(data => console.log(data)).catch(err => console.error(err));


// Asyn with fetch
async function getCurrency(url){
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.rates.TRY);
    return data;
}

getCurrency("https://api.exchangeratesapi.io/latest").then(data => console.log(data.rates.TRY));