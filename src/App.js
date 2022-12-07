import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";

import './app.css';
import SearchIcon from './search.svg';

const API_URL ='http://www.omdbapi.com?apikey=d87511fd';

const movie1 =
    {
        "Title": "Superman Returns",
        "Year": "2006",
        "imdbID": "tt0348150",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    }

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

useEffect(() => {
    searchMovies('Superman')
}, [])
 
   return (
    <div className="app">
        <h1>YWW Movie Destination</h1>

        <div className="search">
            <input 
            placeholder="Search for movies" 
            value={searchTerm}
            // onChange={() => {}}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
            src={SearchIcon}
            alt="Search"
            onClick={() => searchMovies(searchTerm)}
            />
        </div>

        { movies?.length > 0 
            ? (
                <div className="container">
                    {/* <MovieCard movie1={movies[0]}/> */}
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )
        }

    </div>
   );

}

export default App;