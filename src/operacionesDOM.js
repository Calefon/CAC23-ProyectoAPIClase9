
let PAGE = document.querySelector("#contenedor");

const renderizarPaginaDePeliculas = (movieData) => {
    clearPage();
    movieData.forEach(
        movie => {
            renderizarTarjetaDePelicula(movie);
        }
    )
}

const renderizarTarjetaDePelicula = ({posterPath,releaseDate,title,id}) => {
    let card = document.createElement("div");
    card.classList.add("movie-card");
    card.id=id

    let poster = document.createElement("img");
    poster.src = posterPath;
    poster.classList.add("card-item");
    card.appendChild(poster);

    let movieTitle = document.createElement("h2");
    movieTitle.classList.add("movie-title");
    movieTitle.classList.add("card-item");
    movieTitle.textContent = title;
    card.appendChild(movieTitle);

    let releaseYear = new Date(releaseDate).getFullYear();
    let year = document.createElement("p");
    year.classList.add("movie-year");
    year.textContent = releaseYear;
    year.classList.add("card-item");
    card.appendChild(year);

    PAGE.appendChild(card);
}

const clearPage = () => {
    while (PAGE.firstChild) {
        PAGE.removeChild(PAGE.firstChild);
    }
}

export {renderizarPaginaDePeliculas}