import React from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

function Movie(props) {
  return (
    <div className="movie">
      <img src={props.image} alt={props.title} />
      <div className="movie-info">
        <h3>{props.title}</h3>
        <p>{props.synopsis}</p>
        <div className="movie-rating">
          <Stars rating={props.rating} />
        </div>
        {props.reviews && props.reviews.length > 0 && (
          <div className="movie-reviews">
            <h4>Reviews:</h4>
            <ReviewList reviews={props.reviews} />
          </div>
        )}
        <div className="movie-review-form">
          <ReviewForm onSubmit={props.onSubmitReview} />
        </div>
      </div>
    </div>
  );
}

export default Movie;
