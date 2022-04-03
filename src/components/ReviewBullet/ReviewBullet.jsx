import React from 'react';
import './ReviewBullet.css';

const ReviewBullet = ({ review }) => {
    const { name, rating, text } = review;
    return (
        <div className='review-bullet p-5 rounded-xl'>
            <h1 className='text-2xl font-semibold'>{name}</h1>
            <h3 className='text-xl my-3'>Rating: <span className='text-orange-400 inline-block ml-2 font-semibold'>{rating}★</span></h3>
            <p className='text-lg'>"{text}"</p>
        </div>
    );
};

export default ReviewBullet;