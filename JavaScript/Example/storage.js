class Storage{

    static getMoviesFromLocalStorage(){
        let movies;
        if(localStorage.getItem("movies")=== null){
            movies = [];
        }
        else {
            movies = JSON.parse(localStorage.getItem("movies"));
        }
        return movies;
        
    }

    static addMovieToLocalStorage(newMovie){
        let movies = this.getMoviesFromLocalStorage();

        movies.push(newMovie);

        localStorage.setItem("movies", JSON.stringify(movies));
    }

    static deleteMovieFromLocalStorage(element){
        const movieTitle = element.parentElement.previousElementSibling.previousElementSibling.textContent;
        let movies = this.getMoviesFromLocalStorage();
        movies.forEach(function(movie,index){
            if(movie.title === movieTitle){
                movies.splice(index,1);
            }
        });
        localStorage.setItem("movies",JSON.stringify(movies));

    }

    static clearMoviesFromLocalStorage(){
            localStorage.removeItem("movies");
    }

}
