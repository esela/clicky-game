import React from 'react';

import Card from './Card/Card';

const cards = (props) => {
    {props.cardList.map((card, index) => {
        return <Card
            image={props.cardList.src}
            name={props.card.id}
            clicked={props.clicked}
            key={index}
        />;
    });
    }
}

export default cards;