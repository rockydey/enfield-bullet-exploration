import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav className='flex justify-center mt-5 mb-20'>
                <CustomLink className='mr-7 uppercase text-xl font-semibold' to='/home'>Home</CustomLink>
                <CustomLink className='mr-7 uppercase text-xl font-semibold' to='/review'>Review</CustomLink>
                <CustomLink className='mr-7 uppercase text-xl font-semibold' to='/dashboard'>Dashboard</CustomLink>
                <CustomLink className='uppercase text-xl font-semibold' to='/blogs'>Blogs</CustomLink>
            </nav>
        </div>
    );
};

export default Header;