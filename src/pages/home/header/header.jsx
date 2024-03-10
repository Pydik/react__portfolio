import React, { Component } from 'react';
import './/header.css';
import search from './icons/search.png';
import favorite from './icons/Favorite.png';
import basket from './icons/basket.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header container">
            <div className="header__logo">
                <Link to="/">
                    <a href="!#" className="header__text">
                        Exclusive
                    </a>
                </Link>
            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <a href="#!">Home</a>
                    </li>
                    <li>
                        <a href="#!">Contact</a>
                    </li>
                    <li>
                        <a href="#!">About</a>
                    </li>
                    <li>
                        <a href="#!">Sign up</a>
                    </li>
                </ul>
            </nav>
            <div className="header__item">
                <div className="header__search">
                    <input className="search__text" placeholder="What are you looking for?"></input>
                    <span>
                        <img src={search} alt="#" className="search__img"></img>
                    </span>
                </div>
                <Link to="/wishlist">
                    <a href="!#">
                        <img src={favorite} alt="#" className="header__favorite img"></img>
                    </a>
                </Link>
                <a href="!#">
                    <img src={basket} alt="#" href="#" className="header__basket img"></img>
                </a>
            </div>
        </header>
    );
}

export default Header;
