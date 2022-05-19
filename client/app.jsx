import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ResponsiveAppBar from './components/navbar.jsx';
import slideShow from './components/slideshow.jsx';
import Demo from './components/Demo.jsx';
// import NavBar from './components/navbar.jsx'
// import NavBar from './components/navbar.jsx'
// import NavBar from './components/navbar.jsx'
// import NavBar from './components/navbar.jsx'
// import NavBar from './components/navbar.jsx'
import MainContainer from './components/mainContainer.jsx'


function App(){
    return(
        <BrowserRouter>
        {/* <ResponsiveAppBar/> */}
        <MainContainer/>
        </BrowserRouter>
    );
};




export default App;