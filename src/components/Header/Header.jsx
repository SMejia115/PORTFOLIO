import React from 'react';
import Logo from '../../assets/logo.png';
import '../../styles/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='headerContainer'>
            <div className='infoContainer'>
                <div className='logoContainer'>
                    <img src={Logo} alt='logo' />
                </div>
                <h1 className='name'>Santiago Mejía</h1>
            </div>

            <div className='navContainer'>
                <ul className='navList'>
                    <li className='navItem'><Link to='/'>Home</Link></li>
                    <li className='navItem'><Link to='/about'>About</Link></li>
                    <li className='navItem'><Link to='/projects'>Projects</Link></li>
                    <li className='navItem'><Link to='contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header