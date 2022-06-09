 import React, { Component } from 'react';
 import Question from '../components/Question.jsx';
 import SessionContainer from './SessionContainer.jsx';


 class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    console.log('show modal 123');
    this.setState({modalShow: true});
  }

  hideModal = () => {
    this.setState({modalShow: false});
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
            showModal={this.showModal}
          />
    });
  
    return (
      <div className="questionsContainer">
        <div className="innerbox">
          <h3>Today's Questions</h3>

        <SessionContainer show={this.state.modalShow} handleClose={this.hideModal}>Session</SessionContainer>
          <div>
            {console.log(todaysQuestions)}
            {todaysQuestions}
          </div>
        </div>
      </div>
    );
  };
 
}

 export default QuestionsContainer;
 