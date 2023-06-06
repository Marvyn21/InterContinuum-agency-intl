import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <h1>Welcome to our Website</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Team</li>
                    <li>Contact</li>
                    <li>Portfolio</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;