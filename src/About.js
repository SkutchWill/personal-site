import React from 'react';
import './styles/About.css';

export default function About() {
    return (
        <div className='About container'>
            <div className='row mt-5'>   
                <div className='col'>
                    <img className='text-start' src={process.env.PUBLIC_URL + "/personal_photo_crop.jpg"} alt="Will"/>   
                </div>
                <div className='col About-content'>
                    <h5 className='About-title'>Who am I?</h5>
                    <p className='About-text'>
                        Detail-oriented full-stack web developer with a proclivity for teaching, collaborating, and continuous learning.  
                        Experience launching APIs for clients with ASP.NET.  
                        Fascination with component-based UI patterns and scalable front-end architectures made possible with modern React.  
                        Pursuing internship to apply web application education and independent study to industry.  
                        Seeking immersion in the practices, tools, and culture leading professional web development teams to success. 
                    </p>
                </div>
            </div>
        </div>
    );
}