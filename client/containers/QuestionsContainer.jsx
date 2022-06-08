 import React, { Component } from 'react';
 import QuestionCreator from '../components/QuestionCreator.jsx';
 import Question from '../components/Question.jsx';


 class QuestionsContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  
    const todaysQuestions = this.props.questions.map((q, i) => {
          console.log('qname: ' + q.name);
          return <Question 
            key={`Question${i}`} 
            name={q.name} 
            link={q.link} 
            dates={q.dates}
            patterns={q.patterns}
          />
    });
  
    return (
      <div className="questionsContainer">
        <div className="innerbox">
          <h3>Today's Questions</h3>
          <div>
            <QuestionCreator/>
            {console.log(todaysQuestions)}
            {todaysQuestions}
          </div>
        </div>
      </div>
    );
  };
 
}

 export default QuestionsContainer;
 