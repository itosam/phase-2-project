import { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import MovieList from './MovieList';
import MovieForm from './MovieForm';

function MovieContainer() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {},[]);
    const onAddMovie=(newMovie)=>{
        setMovies({...movies, newMovie})
    }

    return (
        <Switch>
            <Route exact path={["/movies"]}>
                <MovieList
                    movies={movies}
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