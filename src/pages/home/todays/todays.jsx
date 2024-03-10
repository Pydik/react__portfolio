import React, { Component } from 'react';
import './todays.css';

import TodaysSlider from './components/todaysSlider';

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
                            <TodaysSlider />
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
