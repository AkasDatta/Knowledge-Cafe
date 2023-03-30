import React from 'react';
import './Header.css';
import logo from '../../../public/logo.jpg'
const Header = () => {
    return (
        <nav className='header'>
            <h2>Programming-cafe</h2>
            <div>
                <img src={logo} alt="" />  
            </div>
        </nav>
    );
};

export default Header;