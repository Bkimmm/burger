import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';



const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = ()=> setClick(!click);


  return (
    <div className='header'>
        <Link to ='/'>
            <h1>Olympus</h1>
        </Link>
        <ul className={click ? 'nav-menu active': 'nav-menu'}>
            <li>
                {click ? (<Link to ='/' style={{color:'white'}}>Home</Link>):
                (<Link to ='/' >Home</Link>)
                }
            </li>
            <li>
                 <a href='/' style={click ? {color:'white'}:{color:'black'}}>Npm install</a>
            </li>
            <li>
                {click ? (<Link to ='/Demo' style={{color:'white'}}>Demo</Link>):
                (<Link to ='/Demo' >Demo</Link>)
                }
            </li>
            <li>
                <a href='https://github.com/oslabs-beta/Olympus' target='_blank'style={click ? {color:'white'}:{color:'black'}}>Github</a>
            </li>
            <li>
            {click ? (<Link to ='/' style={{color:'white'}}>Home</Link>):(<Link to ='/' >Home</Link>)}
            </li>

        </ul>
        <div className='hamburger' onClick={handleClick}>
            { click ? (<FaTimes size = {20} style={{color:'white'}}/>) 
            : <FaBars size = {20} style={{color:'white'}}></FaBars>}
            
        </div>
    </div>
  )
}

export default Navbar