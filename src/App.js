import React from 'react';
import './App.css';
import Routes from './Routes';
import './ProductList.css';
import  { NavLink } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <NavLink to='/'>Products</NavLink>
            <NavLink to='/cart'>Cart</NavLink>
            <Routes />
        </div>
    );
}

export default App;
