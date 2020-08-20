import React from 'react';
import './styles.css';
import Square from './../components/header-square/Square';
import headerImg from './../assets/giraffes.png';
import Footer from './../components/footer/Footer';

const Hosts = () => {
  return (
    <div>
      <Square image={headerImg}/>
      <div className='intro'>
          <h1 className='title dark-blue'>The #1 place to find <br/>great podcast guests</h1>
          <h2 className='main-blue'>There are interesting people, who'd love to be on your podcast. <br/>It's just not that easy to find them online. Now it is.</h2>
          <button>Join Now</button>
      </div>
      <Footer/>
    </div>
  );
}

export default Hosts;