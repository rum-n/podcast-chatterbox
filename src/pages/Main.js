import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import InsideFooter from './../components/footer/InsideFooter';
import Modal from "./../components/modal/Modal";
import useModal from './../useModal';
import app from './../base';

const Main = () => {
    const {isShowing, toggle} = useModal();
    const [guests, setGuests] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = app.firestore().collection("guests");

    function getGuests() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setGuests(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getGuests();
    }, [])

    if (loading) {
        return <h2>Loading...</h2>
    }

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
                    {guests.map(guest => (
                        <div key={guest.name} className='guest-card'>
                            <h2>{guest.name} <span>{guest.timezone}</span></h2>
                            <h3>{guest.title}</h3>
                                <div className='guest-full-category'>
                                    <div className='category-tag'>Business</div>
                                    <div className='category-tag'>Comedy</div>
                                </div>
                            {/* <p onClick={toggle}>Read more</p> */}
                            {/* <Link to={`/${guest.name}`}><p>Profile page</p></Link> */}
                            <h4><span role="img" aria-label='celebrate'>🎉</span> Achievements:</h4>
                            {(guest.achievements).map(achievement=>
                            (<li> {achievement}</li>))}
                            <h4>🎙 I'd be happy to talk about:</h4>
                            {(guest.topics).map(topic=>
                            (<li> {topic}</li>))}
                        </div>
                    ))}
                    {/* {guests.map} */}
                </div>
                <Modal
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
                />
            <InsideFooter/>
        </React.Fragment>
    )
};

export default Main;