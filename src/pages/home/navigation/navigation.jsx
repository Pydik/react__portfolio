import React, { Component } from 'react';
import './navigation.css'
import iphone from './images/iphone.png'
import logo from './images/Apple_gray_logo.png'
import rightArrow from './images/icons arrow-right.png'
import { navigationData } from './navigationData';

class Navigation extends Component {
    render() {
        return (
            <div className='navigation container text'>
                <nav className='nav__list'>
                    <ul>
                        <a className="nav__text text" href='#'><li>Woman’s Fashion</li></a>
                        <a className="nav__text text" href='#'><li>Men’s Fashion</li></a>
                        <a className="nav__text text" href='#'><li>Electronics</li></a>
                        <a className="nav__text text" href='#'><li>Home & Lifestyle</li></a>
                        <a className="nav__text text" href='#'><li>Medicine</li></a>
                        <a className="nav__text text" href='#'><li>Sports & Outdoor</li></a>
                        <a className="nav__text text" href='#'><li>Baby’s & Toys</li></a>
                        <a className="nav__text text" href='#'><li>Groceries & Pets</li></a>
                        <a className="nav__text text" href='#'><li>Health & Beauty</li></a>
                    </ul>
                </nav>
                <div className='nav__slider'>
                    <div className='slider__text'>
                        <div className='slider__title text'>
                            <img src={logo}></img>
                            <p>iPhone 14 Series</p>
                        </div>
                        <div className='slider__description text'>Up to 10% off Voucher</div>                        
                        <a className='slider__link text' href='#'>
                        <div >Shop Now
                            <img src={rightArrow}></img>
                        </div>
                        </a>
                    </div>
                    <div className='slider__img'>
                        <img src={iphone} alt='#'></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;