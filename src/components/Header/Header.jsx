import React from 'react';
import Logo from '../../assets/logo.png';
import '../../styles/Header.css'

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
                    <li className='navItem'>Home</li>
                    <li className='navItem'>About</li>
                    <li className='navItem'>Projects</li>
                    <li className='navItem'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header