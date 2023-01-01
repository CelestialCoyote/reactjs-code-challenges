import React from 'react';
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/challege1">Challenge 1</Link>
                    </li>
                    <li>
                        <Link to="/challenge2">Challege 2</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};


export default Layout;
