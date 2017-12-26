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
    score: 0,
    attempts: 0
  }

  handleClicked = (event) => {
    console.log('Clicked!');
    this.setState({ setSearch: true });
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Cards cardList={cardList} />
      </div>
    );
  }
}

export default App;
