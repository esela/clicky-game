import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'
import Grab from './utils/api';

class App extends Component {

  state = [
    {title: 'Not Set'},
    {images: Grab},
    {selected: []},
    {score: 0}
  ]

  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar title={this.state.title} />
        </div>
      </div>
    );
  }
}

export default App;
