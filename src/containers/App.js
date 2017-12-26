import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header/Header'
// import Navbar from '../components/Navbar/Navbar';
// import Grab from '../utils/api';
import Cards from '../components/Cards/Cards';

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

    const images = [
      {
        'id': 'bill',
        'src': '../assets/images/bill.png'
      },
      {
        'id': 'bobby',
        'src': '../assets/images/bobby.png'
      },
      {
        'id': 'boomhauer',
        'src': '../assets/images/boomhauer.png'
      },
      {
        'id': 'dale',
        'src': '../assets/images/dale.png'
      },
      {
        'id': 'hank',
        'src': '../assets/images/hank.png'
      },
      {
        'id': 'luanne',
        'src': '../assets/images/luanne.png'
      },
      {
        'id': 'peg',
        'src': '../assets/images/peg.png'
      },
      {
        'id': 'propane',
        'src': '../assets/images/propane.png'
      },
      {
        'id': 'swap',
        'src': '../assets/images/swap.png'
      }
    ];

    return (
      <div className="App">
        <Header />
        <Cards cardList={images} clicked={this.handleClicked} />
      </div>
    );
  }
}

export default App;
