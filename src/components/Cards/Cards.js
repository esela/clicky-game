import React from 'react';
import Radium from 'radium';

import './Cards.css';

const cards = (props) => {

    const style = {
        width: "175px",
        height: "175px",
        margin: "6px",
        boxShadow: "4px 3px #ccc",
        borderRadius: "6px",
        ":hover": {
            filter: "grayscale(1)"
        }
    }

    return (
    <div className="holder">
        {props.cardList.map(element => (
            <img 
                style={style}
                className="img"
                src={element.src}
                alt={element.alt}
                key={element.id}
                onClick={props.clicked}
            />
        ))}
    </div>
)}

export default Radium(cards);