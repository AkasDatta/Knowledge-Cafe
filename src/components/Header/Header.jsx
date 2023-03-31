import React from 'react';
import './Header.css';
import logo from '../../../public/logo.jpg'
const Header = () => {
    return (
        <div className='container mt-5'>
            <nav className="navbar justify-content-between header">
              <h2 className="navbar-brand">Programming-cafe</h2>
              <form className="form-inline ">
                 <img src={logo} alt="" /> 
                <button className="btn btn-outline-success m-4 my-sm-0" type="submit">
                  Blog
                </button>
              </form>
            </nav>
          </div>
    );
};
export default Header;