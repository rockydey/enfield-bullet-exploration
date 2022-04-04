import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewBullet from '../ReviewBullet/ReviewBullet';
import './Review.css';

const Review = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1 className='text-center mb-20 text-3xl font-bold'>What Our Customers Say!</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:mx-20'>
                {
                    reviews.map(review => <ReviewBullet
                        key={review.id}
                        review={review}
                    ></ReviewBullet>)
                }
            </div>
        </div>
    );
};

export default Review;