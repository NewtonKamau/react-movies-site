import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from "./components/Movie";

const popularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=7881030c71067049ff65f2cede7914f1&language=en-US&page=1";
const apiKey="APIKEY";
const movieSearch="https://api.themoviedb.org/3/search/movie?api_key=APIKEY&language=en-US&query="
   

function App() {
const [movies,setMovies] = useState([]);
const [searchTerm,setSearchTerm] = useState("");
useEffect(() => {
 fetch(popularMovies)
 .then((res)=>res.json())
 .then((data)=> setMovies(data.results))
}, []);
const handleChange = (e) =>{
  e.preventDefault();
}
  return (
<div className="root">
  <header>
      <form onSubmit={handleChange}>
        <input  className="search" 
        type="text"
         placeholder="search......"
         valaue = {searchTerm}
         ></input>
      </form>
    </header>
    <div className="movie-container">
   
   {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie}/>)}
   
  </div>
</div>
 
  );
}

export default App;
