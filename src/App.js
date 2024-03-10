import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Wishlist from './pages/wishlist/components/wishlist.jsx';
import HomePage from './pages/home/homePage.jsx';
//import './App.css';
import './reset.css';
import ItemDetails from './pages/productDetails/components/itemDetails.jsx';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="/item/:id" element={<ItemDetails />} />
            </Routes>
        </div>
    );
}

export default App;
