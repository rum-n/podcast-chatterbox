import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import logo from './../../assets/logo.png';
import { AuthContext } from './../../Auth';
import app from './../../base';

const Nav = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <header>
            {/* <Link to='/'> */}
                <div className='logo'>
                    <img src={logo} alt='Logo'/>
                </div>
            {/* </Link> */}
            <nav>
                <ul className='menu'>
                    {!currentUser && <li><NavLink className='main-blue' to='/'>Home</NavLink></li>}
                    {!currentUser && <li><NavLink className='main-blue' to='/hosts'>For Hosts</NavLink></li>}
                    {!currentUser && <li><NavLink className='main-blue' to='/guests'>For Guests</NavLink></li>}
                    {!currentUser && <li><NavLink className='main-blue' to='/login'>Login</NavLink></li>}
                    {!currentUser && <li><NavLink className='main-blue' to='/signup'>Join Now</NavLink></li>}
                    {currentUser && <li><button className='logout-btn main-blue' onClick={()=>app.auth().signOut()}>Logout</button></li>}
                </ul>
            </nav>         
        </header>
    )
};

export default Nav;