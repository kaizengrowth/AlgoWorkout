import React from 'react';
import LabeledText from './LabeledText.jsx';

const Question = (props) => (
  <div className="assetBox">
    <h3>{props.name}</h3>
    <div>
      <br></br>
      <LabeledText label="Level" text={props.level} />
      <LabeledText label="Patterns" text={props.patterns}/>
      <LabeledText label="Link" text={props.link} />
    </div>
    <div className="flex">
      {console.log(props.showModal)}
      <button type="button" className='showModal' onClick={(e) => {e.preventDefault; props.showModal(props.name)}}>Work on it! 💪</button>
      {/* <button className='action2'>Solved! 🙌</button> */}
    </div>
  </div>
);

export default Question;
