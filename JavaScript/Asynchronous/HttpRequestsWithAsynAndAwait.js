class Request {
    // get
    async get(url){
        const getResponse = await fetch(url);
        const getData = await getResponse.text();
        return getData;
    }

    // post
    async post(url,data){
        const postResponse = await fetch(url,{
            method : 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const postData = await postResponse.json();
        return postData;
    }

    // put 
    async put(url,data){
        const putResponse = await fetch(url,{
            method:'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        });
        const putData = await putResponse.json();
        return putData;
    }

    // delete
    async delete(url){
        const deleteResponse = await fetch(url,{ method: 'DELETE'})
        return "Data Deleted"
    }
}



const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums").then(data => console.log(data));

request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"furkan"}).then(data => console.log(data))

request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"furkan"}).then(data => console.log(data));

request.delete("https://jsonplaceholder.typicode.com/albums/1").then(data => console.log(data));