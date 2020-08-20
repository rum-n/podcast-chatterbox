import React from 'react';
import './styles.css';
import logo from './../../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={logo} alt='Podcast Chatterbox logo'/>
                <p>© 2020 Podcast Chatterbox. All rights reserved.</p>
            </div>
            <div>
                <h4>Features</h4>
                <p><NavLink className='main-blue' to='/hosts'>For Hosts</NavLink></p>
                <p><NavLink className='main-blue' to='/guests'>For Guests</NavLink></p>
            </div>
            <div>
                <h4>Contact</h4>
                <p>for any bugs or feature requests</p>
                <p>reach out via <a href='https://twitter.com/room_n'>Twitter</a></p>
            </div>
            <div>
                <h4>Credits</h4>
                <p>Created by <a href='https://rmanev.com'>Rumen Manev</a></p>
                <p>Illustrations by <a href='https://www.etsy.com/shop/Nordkins'>Nordkins</a></p>
            </div>
        </footer>
    )
}

export default Footer; 