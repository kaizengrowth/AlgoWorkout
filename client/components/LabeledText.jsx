import React from 'react';

const LabeledText = ({ label, text }) => (
  <div>
    <div>
      <p>
        <strong>{`${label}: `}</strong>
        {text}
      </p>
    </div>
  </div>
);

export default LabeledText;
