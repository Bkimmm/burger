import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './containers/Navbar.jsx';
import Demo from './containers/Demo.jsx';
import Footer from './containers/Footer.jsx'
import styles from './scss/styles.scss';

function App() {
    return(
        <BrowserRouter>
            <Navbar/>
        </BrowserRouter>
    );
};

export default App;