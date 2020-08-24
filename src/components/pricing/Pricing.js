import React, { useState } from 'react';
import './styles.css';

const Pricing = () => {
    const pricePeriods = {
        monthly: {
            details: [
                "Monthly subscription",
                "Secure payment using Stripe",
                "Daily updated list of podcast guests",
                "Browse easily by category",
                "See guest's achievements at a glance",
                "Easily compile talking points for your interview"
            ],
            price: 10
        },
        yearly: {
            details: [ 
                "Yearly subscription",
                "Secure payment using Stripe",
                "Get 2 months for free",
                "Daily updated list of podcast guests",
                "Browse easily by category",
                "See guest's achievements at a glance",
                "Easily compile talking points for your interview"
            ],
            price: 100
        }
    }

    const [ pricePeriod, setPricePeriod ] = useState(pricePeriods.monthly);

    return (
        <div className='pricing-wrapper'>
            <h2 className='process-title main-blue'>Pricing</h2>
            <div className='price-btn-wrapper'>
                <button id='monthly' onClick={() => setPricePeriod(pricePeriods.monthly)}>Monthly</button>
                <button id='yearly' onClick={() => setPricePeriod(pricePeriods.yearly)}>Yearly</button>
            </div>
            <div className='price-plan'>
                <div className='price'>
                    <h3 key={pricePeriod.price}>${pricePeriod.price}</h3>
                </div>
                <div className='monthly-price-details'>
                    <ul>
                        {pricePeriod.details.map(details => (
                            <li>{details}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pricing; 