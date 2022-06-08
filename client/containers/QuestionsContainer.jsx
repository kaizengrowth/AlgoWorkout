 import React from 'react';
 import QuestionCreator from '../components/QuestionCreator.jsx';
 import QuestionsDisplay from '../components/QuestionsDisplay.jsx';
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux';
 import * as actions from '../actions/actions.js';
 
 const QuestionsContainer = () => (
   <div className="innerbox">
     <h3>Problems</h3>
     <div>
      <QuestionCreator/>
      <QuestionsDisplay/>
     </div>
   </div>
 );
 
 export default QuestionsContainer;
 