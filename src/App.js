import React from 'react';
//import './App.css';
import './reset.css';
import PreHeader from './pages/home/preHeader/preHeader.jsx';
import Header from './pages/home/header/header.jsx';
import Navigation from './pages/home/navigation/navigation.jsx';
import Categories from './pages/home/categories/categories.jsx';
import Todays from './pages/home/todays/todays.jsx';
import Footer from './pages/home/footer/footer.jsx';

function App() {
    return (
        <div className="App">
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

export default App;
