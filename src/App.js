import React from 'react';
//import './App.css';
import './reset.css'
import PreHeader from './pages/home/preHeader/preHeader.jsx';
import Header from './pages/home/header/header.jsx';
import Navigation from './pages/home/navigation/navigation.jsx';
import Categories from './pages/home/categories/categories.jsx';

function App() {
  return (
    <div className="App">
      <PreHeader />
      <Header />
      <Navigation />
      <Categories />
    </div>
  );
}

export default App;
