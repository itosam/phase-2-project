import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function MovieTile({title, year, poster, plot, rating}){
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
           <Button variant="primary">add to Favorites</Button>
           <Button variant="primary">Watched list</Button>
         </Card.Body>
    </Card> 
  );
};
export default MovieTile;