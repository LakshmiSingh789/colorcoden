import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import '../Styles/header.css';
import {useLocation} from 'react-router-dom';
import originLogo from '../assets/originLogo.svg';

const Header = () => {

    const location = useLocation();

    return (
        <div className={`${location.pathname === '/' ? 'header-visible' : 'header-container'}`}>
            <nav className="header-nav">
                <div className="header-links">
                    <img src={originLogo} alt="logo" className="header-logo" />
                    <Link to="/shop" className="header-link">SHOP</Link>
                    <Link to="/aboutus" className="header-link">ABOUT US</Link>
                    <Link to="/recipes" className="header-link">RECIPES</Link>
                    <Link to="/blog" className="header-link">BLOG</Link>
                    <Link to="/reviews" className="header-link">REVIEWS</Link>
                    <Link to="/proteinCalculator" className="header-link protein-calculator">Protein Calculator</Link>
                </div>
                <div className="header-actions">
                    <input type="text" className="header-search" placeholder="Search products" />
                    <Link to="/login" className="header-icon"><FaUser /></Link>
                    <Link to="/cart" className="header-icon"><FaShoppingCart /></Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
