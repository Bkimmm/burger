import React from 'react'
import {Link} from 'react-router-dom';
import './Video.css'
import greekVideo from '../assets/Poseidon.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={greekVideo} type='video/mp4'/>
        </video>
        <div className='content'>
            <h1>Olympus</h1>
            <p>GraphQL + Redis</p>
            <p>Hybrid Cache</p>

            <div>
                <Link to='Demo' className='btn'>Demo</Link>
                {/* <Link to='Demo' className='btn btn-light'>Demo</Link> */}
            </div>
        </div>

    </div>
  )
}

export default Video