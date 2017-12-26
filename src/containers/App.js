import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header/Header'
// import Navbar from '../components/Navbar/Navbar';
// import Grab from '../utils/api';
import Cards from '../components/Cards/Cards';
import cardList from "../imageList.json";

class App extends Component {

  state = {
    selected: [],
    currentScore: 0,
    highScore: 0
  }

  handleClicked = (event) => {
    console.log('Clicked!');
    this.setState(
      { currentScore: this.state.currentScore += 1 }
    );
  }

  render() {
    return (
      <div className="App">
        <Header currentScore={this.state.currentScore} highScore={this.state.highScore}/>
        <Cards cardList={cardList} clicked={this.handleClicked} />
      </div>
    );
  }
}

export default App;
