import React from 'react';

import Card from './Card/Card';

const cards = (props) => {
    {props.cardList.map(card => {
        return <Card
            image={props.source}
            name={props.name}
            clicked={props.clicked}
        />;
    });
    }
}