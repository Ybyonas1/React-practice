import { useEffect } from "react";

import './app.css';
import SearchIcon from './search.svg';

// 132884e7

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

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

useEffect(() => {
    searchMovies('Superman')
}, [])
 
   return (
    <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
            <input 
            placeholder="Search for movies" 
            value="Superman" 
            onChange={() => {}}
            />
            <img
            src={SearchIcon}
            alt="Search"
            onClick={() => {}}
            />
        </div>

        <div className="container">
            <div className="movie">
                <div>
                    <p>{movie1.Year}</p>
                </div>
                <div>
                    <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.title}/>
                </div>
                <div>
                    <span>{movie1.Type}</span>
                    <h3>{movie1.Title}</h3>
                </div>
            </div>
        </div>
    </div>
   );

}

export default App;