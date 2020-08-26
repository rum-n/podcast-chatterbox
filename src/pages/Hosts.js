import React from 'react';
import './styles.css';
import headerImg from './../assets/giraffes2.png';
import Footer from './../components/footer/Footer';
import Pricing from './../components/pricing/Pricing';
import HostReasons from '../components/hostReasons/HostReasons';

const Hosts = () => {
  return (
    <div>
      <div className='hosts-header'>
        <img src={headerImg} alt='Graphic Giraffes'/>
      </div>
      <div className='intro'>
          <h1 className='title dark-blue'>The #1 place to find <br/>great podcast guests</h1>
          <h2 className='main-blue'>There are interesting people, who'd love to be on your podcast. <br/>It's just not that easy to find them online. Now it is.</h2>
          <button>Join Now</button>
      </div>
      <HostReasons/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default Hosts;