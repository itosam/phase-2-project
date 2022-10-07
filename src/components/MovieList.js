import React, { useState } from "react";
import MovieTile from "./MovieTile";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

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
    <Container className="bg-light text-center" style={{ marginTop: "100px" }}>
      <h2>Movies</h2>
      <input
        style={{
          borderRadius: "5px",
          width: "20em",
          border: "#3333 2px solid",
          padding: "8px",
          margin: "10px",
        }}
        type="text"
        placeholder="Search..."
        onChange={handleOnChange}
        value={searchQuery}
      />
      <button
        variant="dark"
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "5px",
          padding: "8px",
        }}
        onClick={onFavoritesClick}
      >
        {favorites ? "Show All" : "Show Favorites"}
      </button>
      <div className="grid text-left">{movieCards}</div>
      {/* <button onClick={handleClickMore}>Show More!</button> */}
    </Container>
  );
}
export default MovieList;
