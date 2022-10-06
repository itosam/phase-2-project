import React, { useState } from "react";
import MovieTile from "./MovieTile";
import Container from "react-bootstrap/Container";

function MovieList({
  movies,
  favorites,
  searchQuery,
  setSearchQuery,
  onFavoriteMovies,
  onFavoritesClick,
}) {
  // const [moviesIndex, setMoviesIndex] = useState(4);
  // const movieCards = movies.slice(0, moviesIndex).map((movie) => {
    const movieCards = movies.map((movie) => {
      return (
        <MovieTile
          key={movie.id}
          id={movie.id}
          title={movie.title}
          year={movie.release_date}
          poster={movie.poster_path}
          plot={movie.overview}
          rating={movie.vote_average}
          favorite={movie.favorite}
          onFavoriteMovies={onFavoriteMovies}
        />
      );
    });
  // const handleClickMore = () => {
  //   setMoviesIndex((moviesIndex) => (moviesIndex + 4) % movies.length);
  // };
  const handleOnChange = (e) => setSearchQuery(e.target.value);
  return (
    <Container fluid>
      <h2>Movies</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleOnChange}
        value={searchQuery}
      />
      <button onClick={onFavoritesClick}>
        {favorites ? "Show All" : "Show Favorites"}
      </button>
      <div className="grid">{movieCards}</div>
      {/* <button onClick={handleClickMore}>Show More!</button> */}
    </Container>
  );
}
export default MovieList;
