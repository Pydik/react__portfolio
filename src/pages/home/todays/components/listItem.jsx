import React from 'react';
import Heart from './heart';
import { Link } from 'react-router-dom';

function ListItem({ item }) {
    return (
        <div>
            <Link to={'/item/:id'}>
                <div className="list__item">
                    <a href="!#" className="item__block item">
                        <img className="item__img" src={item.img} alt="#" />
                        <Heart />
                    </a>
                    <div className="item__title text">{item.title}</div>
                    <div className="item__price text">
                        <div className="price__new">{item.priceNew}</div>
                        <div className="price__old">{item.priceOld}</div>
                    </div>
                    <div className="item__rating"></div>
                </div>
            </Link>
        </div>
    );
}

export default ListItem;
