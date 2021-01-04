class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    // get
    get(url, callback){
        this.xhr.open("GET",url);
         
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else {
                callback("Error...",null);
            }
        }

        this.xhr.send();
    }

    // post
    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json");

        this.xhr.onload = () => {
            if(this.xhr.status === 201){
                callback(null,this.xhr.responseText);
            }
            else {
                callback("Error",null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }

    // put
    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json");
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else {
                callback("Error",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

    // Delete
    delete(url,callback){
        this.xhr.open("DELETE",url);
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,"data deleted");
            }
            else {
                callback("Error",null);
            }
        }
        this.xhr.send();
    }
}

const request = new Request();

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"furkan"},function(err,response){
//     if(err === null){
//         console.log(response);
//     }
//     else {
//         console.log(err);
//     }
// });

// request.get("https://jsonplaceholder.typicode.com/albums/1",function(err,response){
//     if(err === null){
//         console.log(response);
//     }
//     else {
//         console.log(err);
//     }
// });

// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:143,title:"Furkan"},function(err,response){
//     if(err === null){
//         console.log(response);
//     }
//     else {
//         console.log(err);
//     }
// });

request.delete("https://jsonplaceholder.typicode.com/albums/1",function(err,response){
    if(err === null){
        console.log(response);
    }
    else {
        console.log(err);
    }
})