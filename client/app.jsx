import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ResponsiveAppBar from './components/navbar.jsx'
// import NavBar from './components/navbar.jsx'
// import NavBar from './components/navbar.jsx'
// import NavBar from './components/navbar.jsx'
// import NavBar from './components/navbar.jsx'
// import NavBar from './components/navbar.jsx'


function App(){
    return(
        <BrowserRouter>
        <ResponsiveAppBar/>
        <div>
            <h1>Hello World!</h1>
        </div>
        
        </BrowserRouter>
    );
};




export default App;