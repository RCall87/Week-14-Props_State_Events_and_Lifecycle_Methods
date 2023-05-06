import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'The Godfather',
      image: '/GodFather.jpg',
      director: 'Francis Ford Coppola',
      synopsis: 'The Godfather tells the story of the Corleone crime family, led by patriarch Vito Corleone (Marlon Brando) and his son Michael (Al Pacino). Set in New York City in the 1940s and 50s, the film follows the Corleones as they navigate the complex world of organized crime and deal with rival families, corrupt officials, and family betrayals.',
      rating: 5,
      reviews: []
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      image: '/TheShawshankRedemption.jpg',
      director: 'Frank Darabont',
      synopsis: 'The Shawshank Redemption is a drama about the friendship that develops between two prisoners, Andy Dufresne (Tim Robbins) and Red (Morgan Freeman), over the course of two decades. Set in the 1940s and 50s, the film explores themes of hope, redemption, and the resilience of the human spirit.',
      rating: 4,
      reviews: []
    },
    {
      id: 3,
      title: 'The Dark Knight',
      image: '/TheDarkKnight.jpg',
      director: 'Christopher Nolan',
      synopsis: 'The Dark Knight is a superhero film that explores the conflict between Batman and the Joker, a maniacal criminal who seeks to upend the order of Gotham City. Along the way, Batman grapples with his own ethical code and the limits of his power as he tries to stop the Joker and his reign of terror.',
      rating: 3,
      reviews: []
    }
  ]);

  const addReview = (movieId, review) => {
    setMovies(prevMovies =>
      prevMovies.map(movie =>
        movie.id === movieId
          ? { ...movie, reviews: [...movie.reviews, review] }
          : movie
      )
    );
  };

  return (
    <div className="container">
      <h1>Movie Reviews</h1>
      <MovieList movies={movies} addReview={addReview} />
    </div>
  );
}

export default App;
