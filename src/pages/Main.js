import React from 'react';
import app from './../base';

const Main = () => {

    return (
        <div>
            <li><button onClick={()=>app.auth().signOut()}>Sign Out</button></li>
        </div>
    )
};

export default Main;