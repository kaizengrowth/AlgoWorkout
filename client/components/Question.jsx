import React from 'react';
import LabeledText from './LabeledText.jsx';

const Question = () => (
  <div className="assetBox">
    <h3>Question</h3>
    <div>
      <LabeledText label="Prop 1" text='text' />
      <LabeledText label="Prop 2" text='text' />
      <LabeledText label="Prop 3" text='text' />
    </div>
    <div className="flex">
      <button className='action1'>Work on it! 💪</button>
      <button className='action2'>Solved! 🙌</button>
    </div>
  </div>
);

export default Question;
