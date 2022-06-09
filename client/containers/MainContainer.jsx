import React from 'react';
import QuestionCreator from '../components/QuestionCreator.jsx';
 

class MainContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <h2>All Questions</h2>
        <div className="outerBox">
          {/* <QuestionsContainer questions={this.props.questions}/> */}
          <QuestionCreator/>
        </div>
      </div>
    )
  }
 
}
 export default MainContainer;
 