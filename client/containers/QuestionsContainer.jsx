 import React from 'react';
 import QuestionCreator from '../components/QuestionCreator.jsx';
 import QuestionsDisplay from '../components/QuestionsDisplay.jsx';
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux';
 import * as actions from '../actions/actions.js';

 const url = 'http://localhost:8888/api/';

 class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    fetch(url)
      .then((data) => data.json())
      .then((data) => (this.setState({
        questions: data
      })))
      .catch((err) => console.log(err) 
    )
  }

  render() {
    let questionsToday = [];
    for (let i = 0; i < this.state.questions.length; i++) {
      // questionsToday.push(
      //   <Question 
      //     key={`Question{i}`} 
      //     id={this.state.questions[i]._id}
      //   />
      // )

      console.log(this.state.questions[i]);
    }

    <div className="innerbox">
     <h3>Problems</h3>
     <div>
      <QuestionCreator/>
      <QuestionsDisplay/>
     </div>
   </div>
  }
 }

 export default QuestionsContainer;
 