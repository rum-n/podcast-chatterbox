import React, { useState, useEffect } from 'react';
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import { API } from "aws-amplify";
import { Link } from 'react-router-dom';
import InsideFooter from './../components/footer/InsideFooter';
// import Modal from "./../components/modal/Modal";
// import useModal from './../useModal';

const Main = () => {
    const [guests, setGuests] = useState([]);
    const { isAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function onLoad() {
          if (!isAuthenticated) {
            return;
          }
      
          try {
            const guests = await loadGuests();
            setGuests(guests);
          } catch (e) {
            onError(e);
          }
      
          setIsLoading(false);
        }
      
        onLoad();
      }, [isAuthenticated]);
      
      function loadGuests() {
        return API.get("guests", "/guests");
    }
    
    function renderGuestsList(guests) {
        return [{}].concat(guests).map((guest, i) =>
        i !== 0 ? (
          <Link to={`/guests/${guest.guestId}`}><div key={guest.guestId}>
            <p>{"Created: " + new Date(guest.createdAt).toLocaleString()}</p>
          </div></Link>
        ) : (
          <div className='subscribe-alert'>
              <h2>You need to create an account to be able to see the list of potential podcast guests.</h2>
          </div>
        )
      );
    }

    // const {isShowing, toggle} = useModal();
    // const [guests, setGuests] = useState([]);
    // const [loading, setLoading] = useState(false);

    // const ref = app.firestore().collection("guests");

    // function getGuests() {
    //     setLoading(true);
    //     ref.onSnapshot((querySnapshot) => {
    //         const items = [];
    //         querySnapshot.forEach((doc) => {
    //             items.push(doc.data());
    //         });
    //         setGuests(items);
    //         setLoading(false);
    //     });
    // }

    // useEffect(() => {
    //     getGuests();
    //     // eslint-disable-next-line
    // },[])

    // if (loading) {
    //     return <h2 className='loading'>Loading...</h2>
    // }

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
            {!isLoading && renderGuestsList(guests)}
                {/* <div className='guests-wrapper'>
                    {guests.map(guest => (
                        <div key={guest.name} className='guest-card'>
                            <h2>{guest.name} <span>{guest.timezone}</span></h2>
                            <h3>{guest.title}</h3>
                                <div className='guest-full-category'>
                                    <div className='category-tag'>Business</div>
                                    <div className='category-tag'>Comedy</div>
                                </div>
                            <p onClick={toggle}>Read more</p>
                            <h4><span role="img" aria-label='celebrate'>🎉</span> Achievements:</h4>
                            {(guest.achievements).map(achievement=>
                            (<li> {achievement}</li>))}
                            <h4>🎙 I'd be happy to talk about:</h4>
                            {(guest.topics).map(topic=>
                            (<li> {topic}</li>))}
                        </div>
                    ))}
                    
                </div> */}
                {/* <Modal
                    isShowing={isShowing}
                    hide={toggle}
                    name={guests.map(guest =>(guest.name))}
                    title={guests.map(guest =>(guest.title))}
                    achievements={guests.map(guest =>
                        (guest.achievements).map(achievement=>
                            (<li><span role="img" aria-label='dash'>➖</span> {achievement}</li>))
                    )}
                    topics={guests.map(guest =>
                        (guest.topics).map(topic=>
                            (<li><span role="img" aria-label='dash'>➖</span> {topic}</li>))
                    )}
                /> */}
            <InsideFooter/>
        </React.Fragment>
    )
};

export default Main;