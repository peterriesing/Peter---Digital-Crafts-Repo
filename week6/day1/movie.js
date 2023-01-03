const searchMovies = async () => {
    const movieCardContainer = document.querySelector(".movie-card-container");
    movieCardContainer.innerHTML = "";
    const inputField = document
        .querySelector(".search-input").value.replace(/\s/g, "+");
    console.log(inputField);
    
    const movieURL = `http://www.omdbapi.com/?apikey=#######&s=${inputField}`;
    const rawData = await fetch(movieURL);
    const json = await rawData.json();

    json.Search.forEach(async (movie) => {
        const movieCard = document.createElement("div");
        const movieTitleDiv = document.createElement("div")
        const moviePeopleDiv = document.createElement("div")
        const movieStatsDiv = document.createElement("div")
        const moviePoster = document.createElement("img");
        const movieTitle = document.createElement("h2");
        const movieDirector = document.createElement("p");
        const movieActors = document.createElement("p")
        const movieRating = document.createElement("p")
        const movieYear = document.createElement("p");
        const movieRunTime = document.createElement("p")
        const imdbID = movie.imdbID;
        const individualMovieData = `http://www.omdbapi.com/?apikey=######&i=${imdbID}`;
        const fetchIndividualMovie = await fetch(individualMovieData);
        const individualJson = await fetchIndividualMovie.json();
        console.log(imdbID);

        // modify
        movieCard.classList = "movieCard";
        moviePoster.classList = "moviePoster";
        movieTitleDiv.classList = "titleDiv";
        moviePeopleDiv.classList = "moviePeople";
        movieStatsDiv.classList = "movieStats";
        moviePoster.src = individualJson.Poster;
        movieTitle.innerText = individualJson.Title;
        movieDirector.innerText = `Director: ${individualJson.Director}`;
        movieActors.innerText = `Top Cast: ${individualJson.Actors}`
        movieRating.innerText = individualJson.Rated
        movieYear.innerText = individualJson.Year;
        movieRunTime.innerText = individualJson.Runtime

        // string interpolation

        // append
        movieTitleDiv.append(movieTitle)
        moviePeopleDiv.append(movieDirector, movieActors)
        movieStatsDiv.append(movieRating, movieYear, movieRunTime)
        movieCard.append(moviePoster, movieTitleDiv, moviePeopleDiv, movieStatsDiv);
        movieCardContainer.append(movieCard);
        });
  //div
};

const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", searchMovies);