import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div className="home">
            <div className="title">Challenges . . .</div>
            
            <NavLink
                to='/challenge1'
                //className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
                Challenge 1
            </NavLink>
            <NavLink
                to='/challenge2'
                //className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
                Challenge 2
            </NavLink>
        </div>
    );
};


export default Home;
