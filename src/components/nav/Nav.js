import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import logo from './../../assets/logo.png';
import { useAppContext } from "../../libs/contextLib";

const Nav = () => {
    const { userHasAuthenticated } = useAppContext();

    function handleLogout() {
        userHasAuthenticated(false);
    }
    
    return (
        <header>
            <NavLink to={userHasAuthenticated ? '/' : '/main'}>
                <div className='logo'>
                    <img src={logo} alt='Logo'/>
                </div>
            </NavLink>
            <nav>
                <ul className='menu'>
                    {userHasAuthenticated && <li><NavLink className='main-blue' to='/hosts'>For Hosts</NavLink></li>}
                    {userHasAuthenticated && <li><NavLink className='main-blue' to='/guests'>For Guests</NavLink></li>}
                    {userHasAuthenticated && <li><NavLink className='main-blue' to='/login'>Login</NavLink></li>}
                    {userHasAuthenticated && <li><NavLink className='main-blue' to='/signup'>Join Now</NavLink></li>}
                    {userHasAuthenticated && <li><button className='logout-btn main-blue' onClick={handleLogout}>Logout</button></li>}
                    
                    {/* {isAuthenticated
                        ? <li><button className='logout-btn main-blue' onClick={handleLogout}>Logout</button></li>
                        : <>
                            <NavLink to="/signup">Signup</NavLink>
                            <NavLink to="/login">Login</NavLink>
                            </>
                    } */}
                </ul>
            </nav>         
        </header>
    )
};

export default Nav;