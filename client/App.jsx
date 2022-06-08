import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:8888/api/")
      .then((data) => data.json())
      .then((data) => this.setState({
        questions: JSON.stringify(data)
      }))
      .catch((err) => console.log(err) 
    )
  }
  
  render() {
    return (<div id="app">
      App
      {this.state.questions}
      {/* < MainContainer questions={this.state.questions} /> */}
    </div>)
  }
}  

export default App;
