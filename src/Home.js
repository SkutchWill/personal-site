import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Home() {
    return( 
        <div>
        <h1>Homepage</h1>
        <Navbar/>
        <Outlet/>
      </div>
    );
}