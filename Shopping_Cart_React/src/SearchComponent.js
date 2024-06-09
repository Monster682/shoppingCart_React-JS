import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa';
import './SearchComponent.css'; 

function SearchComponent({ searchCourse, courseSearchUserFunction, cartItemCount }) {
    return (
        <header className="App-header">
            <h1>E-Commerce</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for Products..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
            <div className="header-links">
                <Link to="/signin" className="header-link">
                    <FaSignInAlt /> Sign In
                </Link>
                <Link to="/signup" className="header-link">
                    <FaUserPlus /> Sign Up
                </Link>
                <Link to="/cart" className="header-link cart-link">
                    <FaShoppingCart />
                    {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
                </Link>
            </div>
        </header>
    );
}

export default SearchComponent;
