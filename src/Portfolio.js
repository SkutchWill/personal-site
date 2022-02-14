import React from 'react';
import './styles/Portfolio.css';
import { colorPicker, eCommerce } from './Content';

export default function Portfolio() {
    return (
        <div className='Portfolio container overflow-hidden'>
            <div className='row gy-5 justify-content-around'>
                <div className='col-7 card'>
                    <img className='card-img-top' src={process.env.PUBLIC_URL + "/Color_Picker.JPG"} alt="Color Picker"/>
                    <div className='card-body'>
                        <h5 className='card-title'>Color Picker</h5>
                        <p className='card-text'>{colorPicker}</p>
                    </div>
                </div>
                <div className='col-7 card'>
                    <img className='card-img-top' src={process.env.PUBLIC_URL + "/Ecomm.JPG"} alt="Ecommerce Site"/>
                    <div className='card-body'>
                        <h5 className='card-title'>Ecomm</h5>
                        <p className='card-text'>{eCommerce}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}