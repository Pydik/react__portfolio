import React, { Component } from 'react';
import './todays.css';
import heart from './images/Heart.png';
import { todaysData } from './todaysData';
import Slider from 'react-slick';

const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    //autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
};

class Todays extends Component {
    render() {
        return (
            <div>
                <section className="todays container">
                    <div className="todays__name categories__name">
                        <div className="note"></div>
                        <p className="todays__name categories__name text">Today’s</p>
                    </div>
                    <div className="todays__box categories__box">
                        <div className="todays__title categories__title text">Flash Sales</div>
                        <div />
                    </div>
                    <div className="todays__slider">
                        <div className="list__items">
                            <Slider {...settings} className="list__items">
                                {todaysData.map(item => (
                                    <div href="#" className="list__item">
                                        <a href="#" className="item__block item">
                                            <img className="item__img" src={item.img} alt="#" />
                                            <img className="img__heart" src={heart} alt="" />
                                        </a>
                                        <div className="item__title text">{item.title}</div>
                                        <div className="item__price text">
                                            <div className="price__new">{item.priceNew}</div>
                                            <div className="price__old">{item.priceOld}</div>
                                        </div>
                                        <div className="item__rating"></div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="todays_button">
                        <button className="button__view-all btn text">View All Products</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Todays;
