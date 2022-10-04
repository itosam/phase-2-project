import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function MovieTile({title, year, poster, plot, rating}){
  const API_IMG="https://image.tmdb.org/t/p/w500/"
  return (
    <Card className= "card" style={{ width: '18rem' }}>
       <Card.Img variant="top" src={API_IMG+poster} alt={title} />
        <Card.Body>
           <Card.Title>{title}</Card.Title>
           <Card.Text>
            <p>{year}</p>
            <p>{plot}</p>
            <p>{rating}</p>
           </Card.Text>
           <Button variant="primary">add to Favorites</Button>
         </Card.Body>
    </Card> 
  );
};
export default MovieTile;