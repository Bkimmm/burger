import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home.jsx'
import './index.css'
import Team from './routes/Team.jsx'
function App() {
  return(
    <div className='App'>
        <Routes>
            <Route path ='/' element = {<Home/>} />
            <Route path ='/Team' element = {<Team />} />

        </Routes>
    </div>
  );
}

export default App;