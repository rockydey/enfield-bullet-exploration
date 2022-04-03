import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewBullet from '../ReviewBullet/ReviewBullet';
import './Review.css';

const Review = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='grid grid-cols-3 gap-7 mx-20'>
            {
                reviews.map(review => <ReviewBullet
                    key={review.id}
                    review={review}
                ></ReviewBullet>)
            }
        </div>
    );
};

export default Review;