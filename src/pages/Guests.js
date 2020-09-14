import React from 'react';
import './styles.css';
import headerImg from './../assets/flamingo2.png';
import Footer from './../components/footer/Footer';
import GuestReasons from './../components/guestReasons/GuestReasons';

const Guests = () => {
  return (
    <div>
      <div className='guests-header'>
        <img src={headerImg} alt='Graphic Flamingo'/>
      </div>
      <div className='intro'>
          <h1 className='title dark-blue'>Get more exposure and <br/>build your personal brand.</h1>
          <h2 className='main-blue'>Speaking on a podcast is a great way to get your name out there,<br/> promote your product or service, and expand your professional network.</h2>
          <button>Join Now</button>
      </div>
      <GuestReasons/>
      <Footer/>
    </div>
  );
}

export default Guests;