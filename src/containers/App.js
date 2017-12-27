import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header/Header'
import Cards from '../components/Cards/Cards';
import cardList from "../imageList.json";

class App extends Component {

  state = {
    selected: [],
    currentScore: 0,
    highScore: 0
  }

  handleClicked = (event) => {
    const tempSelect = this.state.selected;
    if (tempSelect.includes(event.target.alt)) {
      this.setState({ currentScore: 0 })
      console.log('Already exists!', event.target.alt);
    } else {
      tempSelect.push(event.target.alt);
    }
    this.setState({ 
      currentScore: this.state.currentScore + 1,
      selected: tempSelect
    });
    console.log(this.state.selected);
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
