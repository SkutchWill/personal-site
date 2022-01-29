import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

export default function Navbar(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <NavLink to='/'>Home</NavLink>
                </div>
                <div className='col'>
                    <NavLink to='/about'>About</NavLink>
                </div>
                <div className='col'>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
                <div className='col'>
                    <NavLink to='/portfolio'>Portfolio</NavLink>
                </div>
                <div className='col'>
                    <NavLink to='/resume'>Resume</NavLink>
                </div>              
            </div>

        </div>
    );
}