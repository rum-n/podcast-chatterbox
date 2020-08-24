import React, { useState } from 'react';
import './styles.css';

const Pricing = () => {
    const [ pricePeriod, setPricePeriod ] = useState('monthly');

    return (
        <div className='pricing-wrapper'>
            <h2 className='process-title main-blue'>Pricing</h2>
            <div className='price-btn-wrapper'>
                <button id='monthly'>Monthly</button>
                <button id='yearly'>Yearly</button>
            </div>
            <div className='price-plan'>
                <div className='price'>
                    <h3>$10</h3>
                </div>
                <div className='price-details'>
                    <ul>
                        <li>Monthly subscription</li>
                        <li>Secure payment using Stripe</li>
                        <li>Access to a constantly updated list of podcast guests</li>
                        <li>Browse easily by category</li>
                        <li>See guest's achievements at a glance</li>
                        <li>Easily compile talking points for your interview</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pricing; 