import React from 'react';
import Metrics from '../components/Metrics.jsx';
import QuestionsContainer from './QuestionsContainer.jsx';
 

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
        </div>
      </div>
    )
  }
 
}
 export default MainContainer;
 