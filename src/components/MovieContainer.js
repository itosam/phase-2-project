import { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import { getByTitle } from '@testing-library/react';

function MovieContainer() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");


    useEffect(() => {
        fetch('http://localhost:3001/movies')
            .then(r=>r.json())
            .then(data => setMovies(data))
        },[]);
    const onAddMovie=(newMovie)=>{
        setMovies({...movies, newMovie})
    }

    const moviesToDisplay = movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))

    return (
        <Switch>
            <Route exact path={["/movies"]}>
                <MovieList
                    movies={moviesToDisplay}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                 />
            </Route>
            <Route path="/movies/new">
                <MovieForm onAddMovie={onAddMovie} /> 
            </Route>
        </Switch>
  )
}

export default MovieContainer;