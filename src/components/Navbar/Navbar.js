import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {

    return (
        <nav className='navbar'>
            <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
                Home
            </NavLink>
            <NavLink
                to='/challenge1'
                className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
                Challenge 1
            </NavLink>
            <NavLink
                to='/challenge2'
                className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
                Challenge 2
            </NavLink>
        </nav>
    );
};


export default Navbar;
