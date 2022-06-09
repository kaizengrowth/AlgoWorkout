import React from 'react';
import { useEffect, useRef } from 'react';
import '../scss/_clock.scss';

class Clock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    secondHandle = useRef(null);
    minuteHandle = useRef(null);
    hourHandle = useRef(null);
  
    useEffect(() => {
      setInterval(() => {
        let date = new Date();
        let ss = date.getSeconds();
        let mm = date.getMinutes();
        let hh = date.getHours();
        secondHandle.current.style.transform = `rotateZ(${ss * 6}deg)`;
        minuteHandle.current.style.transform = `rotateZ(${mm * 6}deg)`;
        hourHandle.current.style.transform = `rotateZ(${hh * 30}deg)`;
      }, 1000);
    }, []);

    return (
      <div className="clock-container">
        <h2>Timer</h2>
        <div className="clock">
            <div ref={hourHandle} className="hor" id="hor">
                <div className="hr"></div>
            </div>
            <div ref={minuteHandle} className="min" id="min">
                <div className="min"></div>
            </div>
            <div ref={secondHandle} className="sec" id="sec">
                <div className="sc"></div>
            </div>
        </div>
      </div>
    )
  };
}

export default Clock;
