import React from "react";

const movieImages="http://image.tmdb.org/t/p/w1280";

const Movie = ({title,poster_path,overview,vote_average}) => {

    return (
        <div >
       <div className="movie ">
       <img src={movieImages + poster_path} alt={title} />
    
   <div className= "movie-info ">
     <h3>{title}</h3>
      
   <span>Rating {vote_average}</span>
  </div>
   <div className="movie-over">
   <h2>Overview</h2>
    <p>
      {overview}
    </p>
   </div>
   </div>
   </div>
    )
}

 
export default Movie;