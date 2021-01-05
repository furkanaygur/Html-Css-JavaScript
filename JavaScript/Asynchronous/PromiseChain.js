
// // Promise
// function getData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(typeof data === "string"){
//                 resolve(data);
//             }
//             else {
//                 reject(new Error("value isn't a string"));
//             }
//         },2500);
//     });
// }

// getData(1).then(response => console.log("Value: "+ response)).catch(err => console.error(err));



// Promise Chain
function addTwo(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof data === "number"){
                resolve(data+2);
            }
            else {
                reject(new Error("Value isn't a number"));
            }
        },2500);
    });
}

addTwo(10).then(response => {
    console.log(response);
    return response + 2;
}).then(response2 => console.log(response2)).catch(err => console.log(err));