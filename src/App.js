import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from "./components/Movie";

const popularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=apiKey&language=en-US&page=1";
const apiKey=process.env.REACT_MOVIE_API;
const movieSearch="https://api.themoviedb.org/3/search/movie?api_key=apiKey&language=en-US&query="
   

function App() {
const [movies,setMovies] = useState([]);
useEffect(() => {
 fetch(popularMovies)
 .then((res)=>res.json())
 .then((data)=> setMovies(data.results))
}, []);
  return (
  <div className="movie-container">
   {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie}/>)}
   
  </div>
  );
}

export default App;
