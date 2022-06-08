 import React, { Component } from 'react';
 import QuestionCreator from '../components/QuestionCreator.jsx';
 import QuestionsDisplay from '../components/QuestionsDisplay.jsx';


 class QuestionsContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('this.props.questions: ' + this.props.questions);
    let todaysQuestions = ['123', '213'];
    console.log('length: ' + this.props.questions.length);
    for (let question of this.props.questions) {
      console.log('name:' + question['name']);
      // todaysQuestions.push(this.props.questions[i]["name"]);
    }
    return (
      <div className="questionsContainer">
        <div className="innerbox">
          <h3>Problems</h3>
          <div>
            {todaysQuestions}
            Question 1
            Question 2
            {/* <QuestionCreator/>
            <QuestionsDisplay/> */}
          </div>
        </div>
      </div>
    )
  };
 
}

 export default QuestionsContainer;
 