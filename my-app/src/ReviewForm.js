import React, { useState } from 'react';

function ReviewForm(props) {
  const [reviewText, setReviewText] = useState('');

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddReview(reviewText);
    setReviewText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="review-text">Write a review:</label>
      <input
        type="text"
        id="review-text"
        value={reviewText}
        onChange={handleReviewTextChange}
      />
      <button type="submit">Add Review</button>
    </form>
  );
}

export default ReviewForm;

