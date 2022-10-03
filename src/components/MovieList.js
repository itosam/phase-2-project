import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import MovieTile from "./MovieTile";

function MovieList({
  movies, searchQuery,setSearchQuery
}) {
  const movieCards = movies.map((movie) => {
    return (
      <MovieTile
        key={movie.id}
        title={movie.title}
        year={movie.year}
        poster={movie.poster}
        plot={movie.plot}
        rating={movie.rating}
      />
    );
  });


  const handleOnChange = (e) => setSearchQuery(e.target.value);

  return (
    <section>
      <h2>Movies</h2>
      <input type="text" placeholder="Search..." onChange={handleOnChange} value={searchQuery} />

      <ul className="cards">{movieCards}</ul>
    </section>
  );
};

export default MovieList;