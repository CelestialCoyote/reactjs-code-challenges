import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div className="home">
            <div className="title">Challenges . . .</div>
            
            <NavLink
                to='/challenge1'>
                Color Renderer
            </NavLink>
            <NavLink to='/challenge2'>
                Dark Mode
            </NavLink>
            <NavLink to='/challenge3'>
                Form Validator
            </NavLink>
            <NavLink to='/challenge4'>
                Dog Pics
            </NavLink>
            <NavLink to='/challenge5'>
                Challenge 5
            </NavLink>
        </div>
    );
};


export default Home;
