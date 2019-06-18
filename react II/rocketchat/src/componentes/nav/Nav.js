import React from 'react';
import Logo from '../../image/RocketChat.png'
import Menu from './menu/Menu';
import './nav.css';



function Nav(props){
    return (
    <nav className="navbar">
        <div>
            <img className="navbar-logo" src={Logo} alt="logo"></img>
        </div>
        <Menu />
    </nav>
    )
}



export default Nav;