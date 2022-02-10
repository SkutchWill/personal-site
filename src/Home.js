import React, {useEffect, useState} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { BackgroundCircle } from './BackgroundCircle';
import { getRandom } from './helpers';
import './styles/Home.css';

export default function Home() {

    const width = window.innerWidth;

    const height = window.innerHeight;

    const [circleHeight, setCircleHeight] = useState(getRandom(height));
    const [circleWidth, setCircleWidth] = useState(getRandom(width));

    useEffect(() => {
      let intervalId = setInterval(() => {
        setCircleWidth(getRandom(width));
        setCircleHeight(getRandom(height));
      }, 2000);

      return () => clearInterval(intervalId);
    }, );

    return( 
        <div className='Home'>
        <Navbar/>
        <div className='Home-Circle'>
          <BackgroundCircle width={circleWidth} height={circleHeight}/>
        </div>
        <Outlet/>
      </div>
    );
}