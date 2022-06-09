import React from 'react';
import LabeledText from './LabeledText.jsx';

const Question = (props) => (
  <div className="assetBox">
    <h3>{props.name}</h3>
    <button className='button2'></button> 
    <div>
      <br></br>
      <LabeledText label="Level" text={props.level} />
      <LabeledText label="Patterns" text={props.patterns}/>
      <LabeledText label="Link" text={props.link} />
    </div>
    <div className="flex">
      {console.log(props.showModal)}
      <button 
        className='button1' 
        onClick={(e) => {
          props.showModal(props.name, props.questionID); 
        }}> Work On It! 💪 </button>
    </div>
  </div>
);

export default Question;


// props.showModal(props.name)