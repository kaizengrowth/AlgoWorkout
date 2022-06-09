import React, {Component} from 'react';
import '../scss/_modal.scss';
 
const SessionContainer = ({handleClose, show, children}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return(
        <div className = {showHideClassName}>
            <section className = 'modal-main'>
                <img id='pomodoro' src="https://m.media-amazon.com/images/I/51rGqE0iQ5L._AC_SX679_.jpg"/>
                <button type='button' onClick={handleClose}>
                    Complete!
                </button>
            </section>
        </div>
    );
};

 export default SessionContainer;
 