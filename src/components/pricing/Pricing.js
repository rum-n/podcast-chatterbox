import React, { useState } from 'react';
import './styles.css';
import tick from './../../assets/tick.png';

const Pricing = () => {
    const pricePeriods = {
        monthly: {
            details: [
                "1 Month subscription",
                "Browse easily by category",
                "Daily updated list of podcast guests",
                "View guest profiles at a glance",
                "Easily compile an interview"
            ],
            price: 10,
            period: "month"
        },
        yearly: {
            details: [ 
                "1 Year subscription",
                "Get 2 months for free",
                "Browse easily by category",
                "Daily updated list of podcast guests",
                "View guest profiles at a glance",
                "Easily compile an interview"
            ],
            price: 100,
            period: "year"
        }
    }

    const [ pricePeriod, setPricePeriod ] = useState(pricePeriods.monthly);

    return (
        <div className='pricing-wrapper'>
            <h2 className='process-title main-blue'>Simple pricing</h2>
            <p className='why-subtitle' id='price-subtitle'>Payments are handled securely by Stripe</p>
            <div className='price-btn-wrapper'>
                <button id='monthly' onClick={() => setPricePeriod(pricePeriods.monthly)}>Monthly</button>
                <button id='yearly' onClick={() => setPricePeriod(pricePeriods.yearly)}>Yearly</button>
            </div>
            <div className='price-plan'>
                <h3 className='price' key={pricePeriod.price}>${pricePeriod.price} / {pricePeriod.period}</h3>
                <ul>
                    {pricePeriod.details.map(details => (
                        <li><img src={tick} alt='Green Tick'/> {details}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Pricing; 