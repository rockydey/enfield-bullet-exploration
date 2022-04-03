import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='text-center flex flex-col justify-center'>
            <h1 className='text-9xl mb-7 font-bold'>Oops!</h1>
            <h3 className='text-3xl mb-7 font-semibold'>404 - PAGE NOT FOUND</h3>
            <button onClick={() => navigate('/home')} className='text-xl font-bold px-4 py-3 bg-green-600 w-60 mx-auto text-white rounded-md'>GO TO HOMEPAGE</button>
        </div>
    );
};

export default NotFound;