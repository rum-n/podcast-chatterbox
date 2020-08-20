import React from 'react';
import InsideFooter from './../components/footer/InsideFooter';

const Main = () => {

    return (
        <React.Fragment>
            <div className='main main-blue'>
                <h1>Pick a category</h1>
                <div className='categories'>
                    <button>Business</button>
                    <button>Lifestyle</button>
                    <button>Travel</button>
                    <button>Tech</button>
                    <button>Design</button>
                    <button>Comedy</button>
                    <button>Education</button>
                    <button>Music</button>
                    <button>Sports</button>
                    <button>Gaming</button>
                </div>
            </div>
                <div className='guests-wrapper'>
                    <div className='guest-card'>
                        <h3>Rumen Manev <span>UTC+3</span></h3>
                        <h4>Business developer & remote work advocate</h4>
                        <p>Read more</p>
                    </div>
                </div>
            <InsideFooter/>
        </React.Fragment>
    )
};

export default Main;