import React from 'react';
import './Home.css';
import bullet from '../../image/bullet.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='home flex justify-between mx-20'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-5xl font-bold uppercase leading-none'>Best Ride With<br /><span className='text-green-600'>Enfield Bullet 360</span></h1>
                <p className='w-11/12 text-lg my-4 text-gray-600'>The Royal Enfield Bullet 360 is one of the 7 different products from Royal Enfield on sale in India. It has a starting price of $4320 and comes in 2 different versions. The Royal Enfield Bullet 360 generates a max power of 19.1 bhp @ 5250 rpm along with a peak torque of 28 Nm @ 4000 rpm and the engine is mated to a 5 Speed speed gearbox.</p>
                <button className='w-32 rounded-md px-5 py-3 bg-green-600 text-white font-bold' onClick={() => navigate('/')}>Live Demo</button>
            </div>
            <div className='img-div'>
                <img src={bullet} alt="bullet" />
            </div>
        </div>
    );
};

export default Home;