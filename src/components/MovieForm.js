import React from 'react';
import { useState } from "react";


const initialState = {
  title: "",
  year: "",
  poster: "",
  plot: "",
  rating: "",
};

function MovieForm({ onAddMovie }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          onChange={handleChange}
          value={formData.title}
        />

        <label htmlFor="year">Year Released</label>
        <textarea
          id="year"
          name="year"
          onChange={handleChange}
          value={formData.year}
        />

        <label htmlFor="plot">Plot Summary</label>
        <textarea
          id="plot"
          name="plot"
          onChange={handleChange}
          value={formData.plot}
        />

        <label htmlFor="poster">Poster/Image</label>
        <input
          type="text"
          id="poster"
          name="poster"
          onChange={handleChange}
          value={formData.poster}
        />

        <label htmlFor="rating">Rating</label>
        <input
          type="text"
          id="rating"
          name="rating"
          onChange={handleChange}
          value={formData.rating}
        />

        <button type="submit">Add Movie</button>
      </form>
    </section>
  );
};

export default MovieForm;