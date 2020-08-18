import React from 'react';
import './styles.css';

const Square = ({image}) => {

    return (
        <div className='square'>
            <img src={image} alt='Graphic Animal'/>
        </div>
    )
};

export default Square;