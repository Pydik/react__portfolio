import React from 'react';
import Slider from 'react-slick';
import { todaysData } from '../todaysData';
import ListItem from './listItem';

const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    //autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
};

function TodaysSlider() {
    return (
        <div>
            <Slider {...settings} className="list__items">
                {todaysData.map(item => (
                    <ListItem key={item.id} item={item} />
                ))}
            </Slider>
        </div>
    );
}

export default TodaysSlider;
