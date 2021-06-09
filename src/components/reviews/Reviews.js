import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    // console.log(reviews)
    const associatedReviews = reviews && reviews.filter(review => {
      console.log('reviews testing', review)
      console.log("rest ID", restaurantId)
      //&& abstract if/else logic, undefined
      return review.restaurantId === restaurantId

    });
   
    const reviewList = associatedReviews && associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview}/>
    }) 
    // console.log(reviewList)
    return (
      <div>
      <ul>

        {reviewList}
      </ul>
      </div>
    );
  }
};

export default Reviews;