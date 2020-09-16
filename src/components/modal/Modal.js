import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className='guest-full'>
            <div className='guest-full-category'>
                <div className='category-tag'>Business</div>
                <div className='category-tag'>Comedy</div>
            </div>
            <h2>Elon Musk</h2>
            <h3>Founder of Tesla, SpaceX and Solar City</h3>
            <hr className='details-separator'/>
            <h4>🎉 Achievements:</h4>
            <ul>
                <li>Being the richest man alive.</li>
                <li>Being the richest man alive.</li>
                <li>Being the richest man alive.</li>
                <li>Being the richest man alive.</li>
                <li>Being the richest man alive.</li>
            </ul>
            <h4>🎙 I'd be happy to talk about:</h4>
            <ul>
                <li>Coming up with weird baby names.</li>
                <li>Sleeping in a factory.</li>
                <li>Sending cars to space.</li>
                <li>Making flame throwers.</li>
                <li>Having 5 kids.</li>
            </ul>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;