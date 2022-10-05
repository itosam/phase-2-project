import React from 'react';
import { useState } from "react";


const initialState = {
  title: "",
  release_date: "",
  poster_path: "",
  overview: "",
  vote_average: "",
};

function MovieForm({ onAddMovie }) {
  const [formData, setFormData] = useState(initialState);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newMovie =  {
      title: formData.title,
      release_date: formData.release_date,
      poster_path: formData.poster,
      overview: formData.plot,
      vote_average: formData.rating
    }
    fetch('http://localhost:3001/movies', {
      method: 'POST',
      headers: {'Content-Type': "application/json",},
      body: JSON.stringify(newMovie)
    })
    .then((res) => res.json())
    .then((onAddMovie(newMovie)))
  }
    

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Movie</h3>
        <label htmlFor="title">Movie Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Movie Title"
          onChange={handleChange}
          value={formData.title}
        />
        <label htmlFor="release_date">Releast Date</label>
        <textarea
          id="release_date"
          name="release_date"
          placeholder="Release date or year"
          onChange={handleChange}
          value={formData.release_date}
        />
        <label htmlFor="plot">Plot Summary</label>
        <textarea
          id="plot"
          name="plot"
          placeholder="Plot Summary"
          onChange={handleChange}
          value={formData.plot}
        />
        <label htmlFor="poster">Poster/Image</label>
        <input
          type="text"
          id="poster"
          name="poster"
          placeholder="Poster/Movie Image"
          onChange={handleChange}
          value={formData.poster}
        />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          step="0.1"
          placeholder="Rating"
          onChange={handleChange}
          value={formData.rating}
        />
        <button type="submit">Add Movie</button>
      </form>
    </section>
  );
};
export default MovieForm;