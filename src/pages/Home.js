import React from 'react';
import './styles.css';
import Why from './../components/why/Why';
import Process from '../components/process/Process';
import Testimonial from '../components/testimonial/Testimonial';
import headerImg from './../assets/bird2.png';
import Footer from './../components/footer/Footer';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='home-header'>
        <img src={headerImg} alt='Graphic Sparrow'/>
      </div>
        <div className='intro'>
            <h1 className='title dark-blue'>The easiest way to find and <br/>book your next podcast guest</h1>
            <h2 className='main-blue'>Browse through a list of people who'd love to be on your podcast. <br/>See what they've accomplished and prepare a compelling interview.</h2>
            <NavLink className='main-blue' to='/signup'><button id='second-cta'>Join Now</button></NavLink>
        </div>
        <Why/>
        <Process/>
        <h1 className='process-title accent-red'>Start having meaningful conversations today!</h1>
        <Testimonial/>
        <Footer/>
    </div>
  );
}

export default Home;