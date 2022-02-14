import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

export default function Navbar(props) {
    return (
        <div className='container navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='row'>
                <div className='col nav-link'>
                    <NavLink to='/'>Home</NavLink>
                </div>
                <div className='col nav-link'>
                    <NavLink to='/about'>About</NavLink>
                </div>
                <div className='col nav-link'>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
                <div className='col nav-link'>
                    <NavLink to='/portfolio'>Portfolio</NavLink>
                </div>
            </div>
        </div>
    );
}