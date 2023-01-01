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
                to='/page1'
                className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
                Page 1
            </NavLink>
            <NavLink
                to='/page2'
                className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
                Page 2
            </NavLink>
        </nav>
    );
};


export default Navbar;
