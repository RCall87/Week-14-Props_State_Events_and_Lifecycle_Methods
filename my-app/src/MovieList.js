import React from 'react';
import Movie from './Movie';

function MovieList(props) {
  const movies = props.movies.map(movie => (
    <Movie key={movie.id} title={movie.title} image={movie.image} synopsis={movie.synopsis} rating={movie.rating} reviews={movie.reviews} />
  ));

  return (
    <div className="movie-list">
      {movies}
    </div>
  );
}

export default MovieList;
