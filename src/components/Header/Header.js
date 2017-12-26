import React from 'react';

const header = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Clickity Game</h1>
                <p className="lead">High Score! <span>{props.highScore}</span></p>
                <p className="lead">Current Score: <span>{props.currentScore}</span></p>
            </div>
        </div>
    )
}

export default header;