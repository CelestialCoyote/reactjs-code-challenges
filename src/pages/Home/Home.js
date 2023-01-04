import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div className="home">
            <div className="title">Challenges . . .</div>
            
            <NavLink
                to='/challenge1'>
                Challenge 1
            </NavLink>
            <NavLink to='/challenge2'>
                Challenge 2
            </NavLink>
            <NavLink to='/challenge3'>
                Challenge 3
            </NavLink>
            <NavLink to='/challenge4'>
                Challenge 4
            </NavLink>
            <NavLink to='/challenge5'>
                Challenge 5
            </NavLink>
        </div>
    );
};


export default Home;
