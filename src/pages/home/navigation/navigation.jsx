import React, { Component } from 'react';
import './navigation.css'
import iphone from './images/iphone.png'
import logo from './images/Apple_gray_logo.png'
import rightArrow from './images/icons arrow-right.png'
import { navigationData } from './navigationData';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

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
                <Slider {...settings} className='nav__slider '
                slick-arrow={null}
                >
                {navigationData.map((item) => 
                <a href='#' className='nav__slider'>
                    <div className='slider__text'>
                        <div className='slider__title text'>
                            <img src={logo}></img>
                            <p>{item.title}</p>
                        </div>
                        <div className='slider__description text'>{item.description}</div>                        
                        <a className='slider__link text' href='#'>
                        <div >Shop Now
                            <img src={rightArrow}></img>
                        </div>
                        </a>
                    </div>
                    <div className='slider__img'>
                        <img src={item.img} alt='#'></img>
                    </div>
                </a>)}
                
                </Slider>
            </div>
        );
    }
}

export default Navigation;