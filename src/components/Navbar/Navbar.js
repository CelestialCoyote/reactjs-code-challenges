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
        </nav>
    );
};


export default Navbar;
