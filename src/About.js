import React from 'react';
import './styles/About.css';

export default function About() {
    return (
        <div className='About container'>
            <div className='row mt-5'>   
                <div className='col'>
                    <img className='text-start' src={process.env.PUBLIC_URL + "/personal_photo.jpg"} alt="personal photo"/>   
                </div>
            </div>
        </div>
    );
}