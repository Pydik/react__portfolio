import React, { useState } from 'react';
import PreHeader from '../../home/preHeader/preHeader';
import './wishlist.css';
import Header from '../../home/header/header';
import Footer from '../../home/footer/footer';
import TodaysSlider from '../../home/todays/components/todaysSlider';

function Wishlist() {
    return (
        <div>
            <PreHeader />
            <Header />
            <div className="container">
                <section className="wishlist">
                    <div className="wishlist__title">
                        <h1 className="wishlist__text">Wishlist</h1>
                        <button className="wishlist__button">Move All To Bag</button>
                    </div>
                    <TodaysSlider />
                </section>
            </div>
            <Footer />
            <PreHeader />
        </div>
    );
}

export default Wishlist;
