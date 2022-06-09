import React, {Component} from 'react';
import '../scss/_modal.scss';
import Clock from '../components/Clock.jsx';
 
const SessionContainer = ({handleClose, show, children, name}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return(
        <div className = {showHideClassName}>
            <section className = 'modal-main'>
                <h1>{name}</h1>
                <img id='pomodoro' src="../docs/timer.gif"/>
                <button type='button' onClick={handleClose}>
                    Start
                </button>
                <button type='button' onClick={handleClose}>
                    Pause
                </button>
                <br/>
                <button type='button' onClick={handleClose}>
                    Complete! 🙌 
                </button>
            </section>
        </div>
    );
};

 export default SessionContainer;
 