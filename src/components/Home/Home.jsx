import React from 'react';
import './Home.css';
import bullet from '../../image/bullet.png'
import { Link, useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import ReviewBullet from '../ReviewBullet/ReviewBullet';

const Home = () => {
    const navigate = useNavigate();
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <section className='head-section md:block lg:flex justify-between md:mx-20 mb-20'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-5xl font-bold uppercase leading-none'>Best Ride With<br /><span className='text-green-600'>Enfield Bullet 360</span></h1>
                    <p className='w-11/12 text-lg my-4 text-gray-600'>The Royal Enfield Bullet 360 is one of the 7 different products from Royal Enfield on sale in Bangladesh. It has a starting price of Rs 421000 and comes in 2 different versions. The Royal Enfield Bullet 360 generates a max power of 19.1 bhp @ 5250 rpm along with a peak torque of 28 Nm @ 4000 rpm and the engine is mated to a 5 Speed speed gearbox.</p>
                    <button className='w-32 rounded-md px-5 py-3 bg-green-600 text-white font-bold' onClick={() => navigate('/')}>Live Demo</button>
                </div>
                <div className='img-div'>
                    <img src={bullet} alt="bullet" />
                </div>
            </section>
            <section className='review-section'>
                <h1 className='text-4xl text-center font-bold mb-10'>Customer Reviews</h1>
                <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-7 md:mx-20 mb-10'>
                    {
                        reviews.slice(0, 3).map(review => <ReviewBullet
                            key={review.id}
                            review={review}
                        ></ReviewBullet>)
                    }
                </div>
                <div className='flex justify-center'> 
                    <Link to='/review'><button className='w-40 rounded-lg px-5 py-3 bg-green-600 text-white font-bold mb-10'>See All Reviews</button></Link>
                </div>
            </section>
        </div>
    );
};

export default Home;