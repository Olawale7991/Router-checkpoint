import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <h2>{movie.title}</h2>
          <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
