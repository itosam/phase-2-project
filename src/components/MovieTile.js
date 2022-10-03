
function MovieTile({title, year, poster, plot, rating}){
  return (
    <div>
        <h2>Movies diplay!</h2>
        <h2>{title}</h2>
        <img src={poster} alt={title}/>
        <p>{year}</p>
        <p>{plot}</p>
        <p>{rating}</p>
    </div>
  );
};
export default MovieTile;