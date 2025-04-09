import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoNav from '../images/Logo.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header>
            <nav>
                <div className={`navbar ${menuOpen ? "open" : ""}`}>
                    <div className="menuicon" onClick={toggleMenu}>
                        <div className="hamburger"></div>
                        <div className="hamburger"></div>
                        <div className="hamburger"></div>
                    </div>
                    <Link to="/">
                        <img src={logoNav} alt="Little Lemon" />
                    </Link>
                    <ul className={`navlinks ${menuOpen ? "visible" : ""}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/booking">Reservations</Link></li>
                        <li><Link to="/">Order Online</Link></li>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav;