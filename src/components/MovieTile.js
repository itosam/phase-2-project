import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MovieTile({
  id,
  title,
  year,
  poster,
  plot,
  rating,
  favorite,
  onFavoriteMovies,
}) {
  const handleFavoriteClick = () => {
    fetch(`http://localhost:3001/movies/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ favorite: !favorite }),
    })
      .then((r) => r.json())
      .then(onFavoriteMovies);
  };

  return (
    <Card className="card" style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={poster}
        alt={title}
        style={{ width: "100%" }}
      />
      <Card.Body style={{ textAlign: "left" }}>
        <Card.Title>
          <strong>{title}</strong>
        </Card.Title>
        <Card.Text>
          <p>
            <strong>Release date</strong>: {year}
          </p>
          <p>
            <strong>Plot</strong>: {plot}
          </p>
          <p>
            <strong>Rating</strong>:{rating}
          </p>
        </Card.Text>
        <Button variant="primary" onClick={handleFavoriteClick}>
          {favorite ? "remove Favorite" : "add to Favorites"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieTile;
