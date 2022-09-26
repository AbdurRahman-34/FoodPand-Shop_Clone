import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//   import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/logo.png'
import bannar from '../../images/bannar.png'
import './Header.css'
const Header = () => {
    return (
        <div>
        <nav className='header-container'>
                <img src={logo} alt="" />
                <div className="nav-menu">
                    <a href="#"><small>EN ↓</small></a>
                    <a href="#">LOGIN</a>
                    <a href="#">SHOP</a>
                </div>
        </nav>
        <div className="bannar-img">
            <img src={bannar} alt="" />
        </div>
        </div>
    );
};

export default Header;