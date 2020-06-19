import React from 'react';
import './App.css';
import Routes from './Routes';
import './ProductList.css';
import  { NavLink } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <nav className="Nav">
                <NavLink className="Nav-Link" to='/'>Products</NavLink>
                <NavLink className="Nav-Link" to='/cart'>Cart</NavLink>
            </nav>
            <Routes />
        </div>
    );
}

export default App;
