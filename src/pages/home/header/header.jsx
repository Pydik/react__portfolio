import React, { Component } from 'react';
import './/header.css';
import search from './icons/search.png';
import favorite from './icons/Favorite.png';
import basket from './icons/basket.png';

class Header extends Component {
    render() {
        return (
            <div className="header container">
                <div className="header__logo">
                    <a href="#" className="header__text">
                        Exclusive
                    </a>
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
                    <a href="#">
                        <img src={favorite} alt="#" className="header__favorite img"></img>
                    </a>
                    <a href="#">
                        <img src={basket} href="#" className="header__basket img"></img>
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;
