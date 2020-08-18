import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles.css';
import logo from './../../assets/logo.png';

const Nav = () => {

    return (
        <header>
            <Link to='/'>
                <div className='logo'>
                    <img src={logo} alt='Logo'/>
                </div>
            </Link>
            <nav>
                <ul className='menu'>
                    <li><NavLink className='main-blue' to='/hosts'>For Hosts</NavLink></li>
                    <li><NavLink className='main-blue' to='/guests'>For Guests</NavLink></li>
                    <li><NavLink className='main-blue' to='/login'>Login</NavLink></li>
                </ul>
            </nav>         
        </header>
    )
};

export default Nav;