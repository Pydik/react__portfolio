import React, { Component } from 'react';
import './categories.css'
import cellPhone from './images/CellPhone.png'
import camera from './images/camera.png'
import computer from './images/computer.png'
import gamepad from './images/gamepad.png'
import headphones from './images/headphone.png'
import smartwatch from './images/smartWatch.png'

class Categories extends Component {
    render() {
        return (
            <div>
                <div className='categories container'>
                    <p className='categories__name text'>Categories</p>
                    <div className='categories__box'>
                        <div className='categories__title text'>Browse By Category</div>
                        <div className='categories__arrow'>
                            <div className='arrow__right'></div>
                            <div className='arrow__left'></div>
                        </div>
                        <ul className='categories__select'>
                            <a href='#'><li className='categories__item-box text'>
                                <img className='item-box__img' src={cellPhone}></img>
                                <p>Phones</p>
                            </li>
                            </a>
                            <a href='#'><li className='categories__item-box text'>
                                <img className='item-box__img' src={computer}></img>
                                <p>Computers</p>
                            </li>
                            </a>                            
                            <a href='#'><li className='categories__item-box text'>
                                <img className='item-box__img' src={smartwatch}></img>
                                <p>SmartWatch</p>
                            </li>
                            </a>                            
                            <a href='#'><li className='categories__item-box text active'>
                                <img className='item-box__img' src={camera}></img>
                                <p>Camera</p>
                            </li>
                            </a>                            
                            <a href='#'><li className='categories__item-box text'>
                                <img className='item-box__img' src={headphones}></img>
                                <p>HeadPhones</p>
                            </li>
                            </a>                            
                            <a href='#'><li className='categories__item-box text'>
                                <img className='item-box__img' src={gamepad}></img>
                                <p>Gaming</p>
                            </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;