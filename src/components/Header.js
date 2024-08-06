import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import '../Styles/header.css';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className="header-container">
            <nav className="header-nav">
                <div className="header-links">
                    <img src={logo} alt="logo" className="header-logo" />
                    <Link to="/shop" className="header-link">Shop</Link>
                    <Link to="/aboutus" className="header-link">About Us</Link>
                    <Link to="/recipes" className="header-link">Recipes</Link>
                    <Link to="/blog" className="header-link">Blog</Link>
                    <Link to="/reviews" className="header-link">Reviews</Link>
                    <Link to="/proteinCalculator" className="header-link protein-calculator">Protein Calculator</Link>
                </div>
                <div className="header-actions">
                    <input type="text" className="header-search" placeholder="Search products..." />
                    <Link to="/login" className="header-icon"><FaUser /></Link>
                    <Link to="/cart" className="header-icon"><FaShoppingCart /></Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
