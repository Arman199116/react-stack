import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <Link to='/' >Home</Link>
            <br/>
            <br/>
            <Link to='/favorites' >Favorites</Link>
        </nav>
    )
}

export default Navigation;
