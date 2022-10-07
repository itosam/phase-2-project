import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import MovieList from "./MovieList";
import MovieForm from "./MovieForm";

// import bootstrap container
import { Container } from "react-bootstrap";

function MovieContainer() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/movies?_sort=release_date&_order=desc")
      .then((r) => r.json())
      .then((movies) => {
        console.log("movie container loaded");
        setMovies(movies);
      });
  }, []);

  const onAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const onFavoriteMovies = (favoriteMovies) => {
    const updatedMoviesClick = movies.map((movies) =>
      movies.id === favoriteMovies.id ? favoriteMovies : movies
    );
    setMovies(updatedMoviesClick);
  };

  const handleShowFavoriteMovies = () => {
    setFavorites((favorite) => !favorite);
  };

  let moviesToDisplay = movies;
  if (favorites) {
    moviesToDisplay = moviesToDisplay.filter((movie) => movie.favorite);
  }
  if (searchQuery) {
    moviesToDisplay = moviesToDisplay.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <Container>
      <Switch>
        <Route exact path={["/movies"]}>
          <MovieList
            movies={moviesToDisplay}
            searchQuery={searchQuery}
            favorites={favorites}
            setSearchQuery={setSearchQuery}
            onFavoritesClick={handleShowFavoriteMovies}
            onFavoriteMovies={onFavoriteMovies}
          />
        </Route>
        <Route path="/movies/new">
          <MovieForm onAddMovie={onAddMovie} />
        </Route>
      </Switch>
    </Container>
  );
}

export default MovieContainer;
