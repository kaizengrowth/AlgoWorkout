import React, {Component} from 'react';
import '../scss/_modal.scss';
import { nanoid } from 'nanoid';
 
const SessionContainer = ({handleClose, show, name, id}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    console.log('id ' + id);

const handleStart = async (id) => {
    console.log('handleStart: ' + id);
    const createSession = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({questionID: id, userID: "1"})
    };

    try { 
        const response = await fetch('http://localhost:8888/api/sessions', createSession);
        const data = await response.json();
        console.log(data); 
    } catch (err) {
        console.log(err);
    }
}

    return(
        <div className = {showHideClassName}>
            <section className = 'modal-main'>
                <h1>{name}</h1>
                <img id='pomodoro' src="../docs/timer.gif"/>
                <button class='button1' onClick={handleStart(id)}>
                    Start
                </button>
                <br/>
                <button onClick={handleClose}>
                    Complete! 🙌 
                </button>
            </section>
        </div>
    );
};

 export default SessionContainer;
 