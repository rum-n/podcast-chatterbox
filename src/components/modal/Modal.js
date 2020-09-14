import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const Modal = ({ isShowing, hide, name, title, achievements, topics }) => isShowing ? ReactDOM.createPortal(
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
            <h2>{name}</h2>
            <h3>{title}</h3>
            <hr className='details-separator'/>
            <h4><span role="img" aria-label='celebrate'>🎉</span> Achievements:</h4>
            <ul>{achievements}</ul>
            <h4>🎙 I'd be happy to talk about:</h4>
            <ul>{topics}</ul>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;