class UI {
    static addMovieToUI(newMovie){
        const tbody = document.querySelector("#movies");
        tbody.innerHTML += `
            <tr>
                <td><img src="${newMovie.url}" class="img-fluid img-thumbnail" ></td>
                <td>${newMovie.title}</td>
                <td>${newMovie.director}</td>
                <td><a href="#" id="delete-item" class="btn btn-danger">Delete Movie</a></td>
            </tr>
        `
    }
    
   static clearInputs(elsement1,element2,element3){
        element1.value="";
        element2.value="";
        element3.value="";
    }
    
   static displayMessage(message,type,name =""){
        const cardBody = document.querySelectorAll(".card-body")[0];
        const alert = document.createElement("div");
        alert.className = `alert alert-${type}`;
        alert.innerHTML = `<strong> ${name} </strong> ${message}`;
        cardBody.appendChild(alert);
        setTimeout(function(){
            alert.remove();
        },1500);
        
    }
    
   static loadAllMovies(movies){
        const tbody = document.getElementById("movies");
        movies.forEach(movie => {
            tbody.innerHTML += `
                <tr>
                    <td><img src="${movie.url}" class="img-fluid img-thumbnail" ></td>
                    <td>${movie.title}</td>
                    <td>${movie.director}</td>
                    <td><a href="#" id="delete-item" class="btn btn-danger">Delete Movie</a></td>
                </tr>
            `
        });

    }
    

   static deleteMovieFromUI(element){
        element.parentElement.parentElement.remove();
        this.isEmpty();
    }
    

   static clearMoviesFromUI(element){
        const table = element.previousElementSibling.previousElementSibling.children[1];
        while(table.firstElementChild != null)
            {
                table.removeChild(table.firstElementChild);
            }
        this.isEmpty();
    }



}

