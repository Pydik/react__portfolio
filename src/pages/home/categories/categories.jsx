import React, { Component } from 'react';
import './categories.css';
import cellPhone from './images/CellPhone.png';
import camera from './images/camera.png';
import computer from './images/computer.png';
import gamepad from './images/gamepad.png';
import headphones from './images/headphone.png';
import smartwatch from './images/smartWatch.png';
import leftArrow from './images/Left Arrow.png';
import rightArrow from './images/Right Arrow.png';

function Categories() {
    return (
        <div>
            <div className="categories container">
                <div className="categories__name">
                    <div className="note"></div>
                    <p className="categories__name text">Categories</p>
                </div>
                <div className="categories__box">
                    <div className="categories__title text">
                        Browse By Category
                        <div className="categories__arrow">
                            <img src={leftArrow} alt="#" className="arrow__left"></img>
                            <img src={rightArrow} alt="#" className="arrow__right"></img>
                        </div>
                    </div>
                    <ul className="categories__select">
                        <a href="!#">
                            <li className="categories__item-box text">
                                <img className="item-box__img" alt="#" src={cellPhone}></img>
                                <p>Phones</p>
                            </li>
                        </a>
                        <a href="!#">
                            <li className="categories__item-box text">
                                <img className="item-box__img" alt="#" src={computer}></img>
                                <p>Computers</p>
                            </li>
                        </a>
                        <a href="!#">
                            <li className="categories__item-box text">
                                <img className="item-box__img" alt="#" src={smartwatch}></img>
                                <p>SmartWatch</p>
                            </li>
                        </a>
                        <a href="!#">
                            <li className="categories__item-box text active">
                                <img className="item-box__img" alt="#" src={camera}></img>
                                <p>Camera</p>
                            </li>
                        </a>
                        <a href="!#">
                            <li className="categories__item-box text">
                                <img className="item-box__img" alt="#" src={headphones}></img>
                                <p>HeadPhones</p>
                            </li>
                        </a>
                        <a href="!#">
                            <li className="categories__item-box text">
                                <img className="item-box__img" alt="#" src={gamepad}></img>
                                <p>Gaming</p>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Categories;
