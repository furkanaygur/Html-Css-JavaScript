const form = document.getElementById("movie-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#bannerUrl");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearBtn = document.querySelector("#clear-movies")


eventListeners();


function eventListeners(){
    form.addEventListener("submit",addMovie);
    document.addEventListener("DOMContentLoaded",function(){
        let movies = Storage.getMoviesFromLocalStorage();
        UI.loadAllMovies(movies);
    });
    cardBody.addEventListener("click",deleteMovie);
    clearBtn.addEventListener("click",clearMovies);
}

function addMovie(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        UI.displayMessage("<strong>Please enter values</strong>","danger");
    }
    else{
        const newMovie = new Movie(title,director,url);
        UI.addMovieToUI(newMovie);
        Storage.addMovieToLocalStorage(newMovie);

        UI.displayMessage("Movie Added","success",title);
    }

    UI.clearInputs(titleElement, directorElement,urlElement);
    UI.isEmpty();
    
    e.preventDefault();
}

function deleteMovie(e){
    if(e.target.id === "delete-item"){
        UI.deleteMovieFromUI(e.target);
        Storage.deleteMovieFromLocalStorage(e.target);
        UI.displayMessage("Movie Deleted","success",e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    }

    e.preventDefault();
}

function clearMovies(e){
    if (confirm("Are you sure ?")){
        UI.clearMoviesFromUI(e.target);
        Storage.clearMoviesFromLocalStorage();
    }
    e.preventDefault();
}