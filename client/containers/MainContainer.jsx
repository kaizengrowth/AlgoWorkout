import React from 'react';
import Metrics from '../components/Metrics.jsx';
import QuestionsContainer from './QuestionsContainer.jsx';
//import * as actions from '../actions/actions.js';
//import { connect } from 'react-redux';
 
 const MainContainer = (props) => (
   <div className="mainContainer">
     <h2>Today's Questions</h2>
     <div className="outerBox">
       <Metrics />
       <QuestionsContainer questions={props.questions}/>
     </div>
   </div>
 );
 
 export default MainContainer;
 