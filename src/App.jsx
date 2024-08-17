import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import './App.css';

const movies = [
  {
    id: 1,
    title: "Movie Title 1",
    description: "This is the description for Movie Title 1.",
    trailerLink: "https://www.youtube.com/embed/trailer_id_1",
  },
  {
    id: 2,
    title: "Movie Title 2",
    description: "This is the description for Movie Title 2.",
    trailerLink: "https://www.youtube.com/embed/trailer_id_2",
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
