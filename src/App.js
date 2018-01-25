import React, { Component } from 'react';
import jay from './jay2.png'
import './App.css';
import ComponentApp from './components/ComponentApp';
import ComponentContainer from './components/ComponentContainer';


class App extends Component {
  constructor(props) {
  super(props);
  
  this.state = {
    currentTodo: "",
        todo: []
  }
}
 onInputChange = (value) => {
   this.setState({ name: value });
 }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src="./jay2.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Chirper</h1>
        </header>
      <ComponentApp />
      <ComponentContainer input="OMG my first Chirp! Chirp is definitely the new Tweet!" />
      <ComponentContainer input="Coding is so much fun! Everyone should learn to code!" />
      <ComponentContainer input="Go Clemson Tigers!" />
      
      </div>
    );
  }
}
export default App;
