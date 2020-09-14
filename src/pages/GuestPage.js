import React, { useState } from 'react';
import './styles.css';
import InsideFooter from './../components/footer/InsideFooter';
import app from './../base';

const GuestPage = ({match}) => {
    const [state, setState] = useState({});

    const ref = app.firestore().collection(match.params.id);
    
    function getGuests() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setState(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getGuests();
    }, [])

  return (
    <div>
        <h2>{state.name}</h2>
        <h3>{title}</h3>
        <hr className='details-separator'/>
        <h4><span role="img" aria-label='celebrate'>🎉</span> Achievements:</h4>
        <ul>{achievements}</ul>
        <h4>🎙 I'd be happy to talk about:</h4>
        <ul>{topics}</ul>
      <InsideFooter/>
    </div>
  );
}

export default GuestPage;