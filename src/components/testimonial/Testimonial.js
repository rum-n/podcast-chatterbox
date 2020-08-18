import React from 'react';
import './styles.css';
import rumen from './../../assets/rumen.jpg'

const Testimonial = () => {
    return (
        <div className='testimonial'>
            <h2 className='lightest-blue'>"Podcast Chatterbox is, hands down, the most efficient way to create a podcast interview. I just log in and go through a list of interesting people ready to be on my podcast. The best thing is, you know those people want to be on a podcast, so once you've found someone, it's just a matter of finding the right time to record."</h2>
            <h3><img src={rumen} alt='Rumen Manev'/> Rumen Manev, doesn't even have a podcast.</h3>
        </div>
    )
}

export default Testimonial; 