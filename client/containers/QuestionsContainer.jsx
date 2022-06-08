 import React, { Component } from 'react';
 import QuestionCreator from '../components/QuestionCreator.jsx';
 import QuestionsDisplay from '../components/QuestionsDisplay.jsx';


 class QuestionsContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  
    const todaysQuestions = this.props.questions.map(q => q.name);
  
    return (
      <div className="questionsContainer">
        <div className="innerbox">
          <h3>Today's Questions</h3>
          <div>
            {JSON.stringify(todaysQuestions)}
        
            {/* <QuestionCreator/>
            <QuestionsDisplay/> */}
          </div>
        </div>
      </div>
    );
  };
 
}

 export default QuestionsContainer;
 