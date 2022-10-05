import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/movies?_sort=release_date&_order=desc&_limit=4")
      .then((res) => res.json())
      .then((recentMovies) => {
        setRecentMovies(recentMovies);
      });
  }, []);

  return (
    <section className="movie-box">
      <h3>Newly Released Movies:</h3>
      {recentMovies.map((movie) => (
        <img className="home-poster"
        src={movie.poster_path}  
        onClick={(e)=>e.target.value} />
      ))}
      <div style={{ margin: "1rem 0" }}>
        <Link className="button" to="/movies">
          Check out all our Movies
        </Link>
      </div>
    </section>
  );
};

export default Home;