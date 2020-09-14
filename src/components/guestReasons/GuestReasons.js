
import React from 'react';
import './styles.css';
import guestSearch from './../../assets/search.svg';
import guestSuccess from './../../assets/success.svg';
import guestSchedule from './../../assets/schedule.svg';

const GuestReasons = () => {
    return (
        <div className='host-reasons-wrapper'>
            <p className='title-tag'>Why join?</p>
            <h2>Have you ever wanted to be on TV?<br/> This is the next best thing.</h2>
            <p className='why-subtitle'>Reach a wider audience and promote yourself</p>
            <div className='why-join'>
                <img src={guestSearch} alt="Searching for people"/>
                <div className="why-details">
                    <p className='title-tag' id='reason-tag'>Overview</p>
                    <h3 className='host-reason'>Browse people who want <br/> to be on a podcast</h3>
                    <p className='why-subtitle' id='why-details'>Every person you see on the platform created a profile because they'd like to be on a podcast.</p>
                </div>
            </div>
            <div className='why-join'>
                <div className="why-details">
                    <p className='title-tag' id='reason-tag'>Research</p>
                    <h3 className='host-reason'>Check out their <br/> podcast guest profile</h3>
                    <p className='why-subtitle' id='why-details'>Read through people's proudest achievements and the past experience they'd be happy to share on your podcast.</p>
                </div>
                <img src={guestSuccess} alt="Astronaut"/>
            </div>
            <div className='why-join'>
                <img src={guestSchedule} alt="Calendar schedule"/>
                <div className="why-details">
                    <p className='title-tag' id='reason-tag'>Connect</p>
                    <h3 className='host-reason'>Easily reach out <br/> and schedule a time</h3>
                    <p className='why-subtitle' id='why-details'>Connect with your potential podcast guest and set up a time to record your podcast, based on their timezone.</p>
                </div>
            </div>
        </div>
    )
};

export default GuestReasons;