import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import MovieTile from "./MovieTile";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MovieList({
  movies, searchQuery,setSearchQuery
}) {
  const movieCards = movies.map((movie) => {

    return (
      <MovieTile
        key={movie.id}
        title={movie.title}
        year={movie.release_date}
        poster={movie.poster_path}
        plot={movie.overview}
        rating={movie.vote_average}
      />
    );
  });


  const handleOnChange = (e) => setSearchQuery(e.target.value);

  return (
    <Container fluid>
      <h2>Movies</h2>
      <input type="text" placeholder="Search..." onChange={handleOnChange} value={searchQuery} />
      <Row>
        <Col lg={4}>
         {movieCards} 
        </Col> 
      </Row>
    </Container>
  );
};

export default MovieList;