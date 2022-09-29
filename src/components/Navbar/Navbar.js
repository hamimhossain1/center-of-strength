import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <FontAwesomeIcon className='nav-icon' icon={faDumbbell}></FontAwesomeIcon>
            <h1>Center of Strength</h1>
        </div>
    );
};

export default Navbar;