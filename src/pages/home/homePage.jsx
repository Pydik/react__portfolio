import React from 'react';

import PreHeader from './preHeader/preHeader.jsx';
import Header from './header/header.jsx';
import Navigation from './navigation/navigation.jsx';
import Categories from './categories/categories.jsx';
import Todays from './todays/todays.jsx';
import Footer from './footer/footer.jsx';

function HomePage() {
    return (
        <div className="Home">
            <PreHeader />
            <Header />
            <Navigation />
            <Todays />
            <Categories />
            <Footer />
            <PreHeader />
        </div>
    );
}

export default HomePage;
