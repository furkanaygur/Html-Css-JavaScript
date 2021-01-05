class Request {
    // get
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url).then(response => response.json()).then(data => resolve(data))
            .catch(err => reject(err))
        });
    }

    // post
    post(url,data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method : 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset= UTF-8"
                }
            }).then(response => response.json()).then(data => resolve(data))
            .catch(err => reject(err));
        })
    }

    // put
    put(url,data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method : 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset= UTF-8"
                }
            }).then(response => response.json()).then(data => resolve(data))
            .catch(err => reject(err));
        })
    }


    //delete
    delete(url){
        return new Promise((resolve, reject)=> {
            fetch(url, { method: "DELETE" }).then(response => resolve("Data deleted."))
            .catch(err => reject("Data could not be deleted"));
        })
    }
}

const request = new Request();

// GET
let albums;
request.get("https://jsonplaceholder.typicode.com/albums/1").then(data => {
    albums = data
    console.log(albums);
})
.catch(err => console.error(err));


// POST
request.post("https://jsonplaceholder.typicode.com/albums/",{userId:1,title:"furkan"}).then(response => console.log(response))
.catch(err => console.error(err));

// PUT
request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"furkan"}).then(response => console.log(response))
.catch(err => console.error(err));

// DELETE 
request.delete("https://jsonplaceholder.typicode.com/albums/1").then(response => console.log(response))
.catch(err => console.error(err));