import React from 'react';
import Metrics from '../components/Metrics.jsx';
import QuestionsContainer from './QuestionsContainer.jsx';
 

class MainContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('maincontainer', JSON.stringify(this.props))
    return (
      <div className="mainContainer">
        <h2>Today's Questions</h2>
        <div className="outerBox">
          {/* <Metrics /> */}
          {/* <h3>{this.props.questions}</h3> */}
          <QuestionsContainer questions={this.props.questions}/>
        </div>
      </div>
    )
  }
 
}
 export default MainContainer;
 