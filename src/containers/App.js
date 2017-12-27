import React, { Component } from 'react';

import Cards from '../components/Cards/Cards';
import cardList from "../imageList.json";
import Header from '../components/Header/Header'

import './App.css';

class App extends Component {

    state = {
        selected: [],
        imageList: cardList,
        currentScore: 0,
        highScore: 0
    }

    shuffle = (array) => {
        const currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    handleClicked = (event) => {
        const tempSelect = this.state.selected;
        const tempImage = this.shuffle(this.state.imageList);
        if (tempSelect.includes(event.target.alt)) {
            const emptySelect = [];
            if (this.state.currentScore > this.state.highScore) {
                this.setState({
                    highScore: this.state.currentScore,
                    currentScore: 0,
                    selected: emptySelect,
                    imageList: tempImage
                });
            } else {
                this.setState({
                    currentScore: 0,
                    selected: emptySelect,
                    imageList: tempImage
                });
            }
            console.log('Already exists!', event.target.alt);
        } else {
            tempSelect.push(event.target.alt);
            this.setState({
                currentScore: this.state.currentScore + 1,
                selected: tempSelect,
                imageList: tempImage
            });
            console.log(this.state.selected);
        }
    }

    render() {
        return ( <
            div className = "App" >
            <
            Header currentScore = { this.state.currentScore }
            highScore = { this.state.highScore }
            /> <
            Cards cardList = { this.state.imageList }
            clicked = { this.handleClicked }
            /> < /
            div >
        );
    }
}

export default App;