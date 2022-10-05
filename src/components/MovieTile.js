import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function MovieTile({id, title, year, poster, plot, rating, favorite, onFavoriteMovies}){
  const API_IMG="https://image.tmdb.org/t/p/w500/"

  const handleFavoriteClick = () => {
    fetch(`http://localhost:3001/movies/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify({favorite: !favorite}),
    })
    .then((r) => r.json())
    .then(onFavoriteMovies)
  }
  
  return (
    <Card className= "card" style={{ width: '24rem' }}>
       <Card.Img variant="top" src={API_IMG+poster} alt={title} style={{ width: '22rem' }} />
        <Card.Body>
           <Card.Title>{title}</Card.Title>
           <Card.Text>
            <p>{year}</p>
            <p>{plot}</p>
            <p>{rating}</p>
           </Card.Text>
           <Button variant="primary" onClick={handleFavoriteClick}>{favorite ? "remove Favorite" : "add to Favorites"}</Button>
         </Card.Body>
    </Card> 
  );
};

export default MovieTile;