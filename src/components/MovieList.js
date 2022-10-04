import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import MovieTile from "./MovieTile";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MovieList({
  movies, favorite, searchQuery,setSearchQuery, onFavoritesClick, onFavoriteMovies
}) {
  const movieCards = movies.map((movie) => {
    return (
      <MovieTile
        key={movie.imdbID}
        title={movie.title}
        year={movie.year}
        poster={movie.poster}
        plot={movie.plot}
        rating={movie.rating}
        favorite={movie.favorite}
        onFavoritesClick={onFavoritesClick}
        onFavoriteMovies={onFavoriteMovies}
      />
    );
  });


  const handleOnChange = (e) => setSearchQuery(e.target.value);

  return (
    <Container fluid>
      <h2>Movies</h2>
      <input className="search" type="text" placeholder="Search..." onChange={handleOnChange} value={searchQuery} />
      <button variant="primary" onclick={onFavoritesClick}>
        {favorite ? "Hide Favorites" : "Show Favorites"}
      </button>
      <Row>
        <Col lg={4}>
         {movieCards} 
        </Col> 
      </Row>
    </Container>
  );
};

export default MovieList;