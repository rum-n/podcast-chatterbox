import React from 'react';
import './styles.css';
import Square from './../components/header-square/Square';
import headerImg from './../assets/flamingo.png';
import Footer from './../components/footer/Footer';

const Guests = () => {
  return (
    <div>
      <Square image={headerImg}/>
      <div className='intro'>
          <h1 className='title dark-blue'>Get more exposure and <br/>build up your personal brand.</h1>
          <h2 className='main-blue'>Speaking on a podcast is a great way to get your name out there,<br/> promote your product or service, and expand your professional network.</h2>
          <button>Join Now</button>
      </div>
      <Footer/>
    </div>
  );
}

export default Guests;