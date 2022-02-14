import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';
import './styles/Root.css';

export default function Root() {

    return (
        <div className='Root container-fluid'>
            <Navbar/>
            <Outlet/>
        </div>
    )
};