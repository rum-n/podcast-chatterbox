import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Process = () => {
    return (
        <div className='process-content'>
            <h1 className='process-title accent-red'>You're only 3 steps away from <br/>creating the perfect podcast interview</h1>
            <div className='steps'>
                <div className='step-1'>
                    <h2 className='process-step'>Join Now</h2>
                    <p>Use our super simple process to create a monthly subscription. Feel free to cancel anytime you want, no questions asked.</p>
                    <ul>
                        <li><span role='img'>🎙</span> Secure payment using Stripe</li>
                        <li>🎙 Unsubscribe anytime</li>
                    </ul>
                </div>
                <div className='step-2'>
                    <h2 className='process-step'>Browse</h2>
                    <p>Browse through a list of people interested to be on a podcast. You can select a category and search for guests relevant to your podcast. Create a compelling interview, based on people's profiles.</p>
                    <ul>
                        <li>🎙 Easily find relevant people</li>
                        <li>🎙 Prepare for the interview.</li>
                    </ul>
                </div>
                <div className='step-3'>
                    <h2 className='process-step'>Reach out</h2>
                    <p>Message the people you'd like to interview and ask when they're available to record. See their current timezone and sync accordingly.</p>
                    <ul>
                        <li>🎙 Direct contact with your guest.</li>
                        <li>🎙 Easy sync across timezones.</li>
                    </ul>
                </div>
            </div>
            <Link to='/signup'><button>Join Now</button></Link>
        </div>
    )
}

export default Process; 