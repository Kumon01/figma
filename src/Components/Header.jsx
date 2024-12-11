import React from 'react';
import { Link } from 'react-router-dom';  
import '../styles/App.css';

const Header = () => {
    return (
        <header className="header">
            <img className="logo1" src="/logo22.jpg" alt="Logo" width="230" height="98" />
            <nav className="nav">
                <Link to="/" className="navbar">Home</Link>
                <Link to="/running" className="navbar">Running</Link>
                <Link to="/football" className="navbar">Football</Link>
                <Link to="/futsal" className="navbar">Futsal</Link>
                <a href="#"><button className="login-button">Login</button></a>
            </nav>
        </header>
    );
};

export default Header;

