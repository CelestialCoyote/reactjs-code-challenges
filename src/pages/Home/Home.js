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
                Score Keeper
            </NavLink>
            <NavLink to='/challenge6'>
                Window Event
            </NavLink>
            <NavLink to='/challenge7'>
                Color Picker
            </NavLink>
            <NavLink to='/challenge8'>
                Pixel Art
            </NavLink>
            <NavLink to='/challenge9'>
                Simple Calculator
            </NavLink>
            <NavLink to='/challenge10'>
                Focus An Input
            </NavLink>
            <NavLink to='/challenge11'>
                Shopping Cart
            </NavLink>
        </div>
    );
};


export default Home;
