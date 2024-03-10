import React from 'react';
import PreHeader from '../../home/preHeader/preHeader';
import Header from '../../home/header/header';
import { useParams } from 'react-router-dom';

function ItemDetails() {
    const { id } = useParams();

    return (
        <div>
            <PreHeader />
            <Header />
            <h1></h1>
            <p>{id}</p>
        </div>
    );
}

export default ItemDetails;
