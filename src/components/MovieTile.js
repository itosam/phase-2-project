import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function MovieTile({imdbID, title, year, poster, plot, rating, favorite, onFavoriteMovies}){
  
  const handleFavoriteClick = () => {
    fetch(`http://localhost:3001/movies/${parseInt(imdbID)}`, {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify({favorite: !favorite}),
    })
    .then((res) => res.json())
    .then(onFavoriteMovies)
  }
  
  return (
    <Card className= "card" style={{ width: '18rem' }}>
       <Card.Img variant="top" src={poster} alt={title} />
        <Card.Body>
           <Card.Title>{title}</Card.Title>
           <Card.Text>
            <p>{year}</p>
            <p>{plot}</p>
            <p>{rating}</p>
           </Card.Text>
           <button variant="primary" onClick={handleFavoriteClick}>{favorite ? "Delete": "Add to"}</button>
           <Button variant="primary">Watched list</Button>
         </Card.Body>
    </Card> 
  );
};
export default MovieTile;