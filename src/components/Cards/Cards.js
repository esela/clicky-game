import React from 'react';

import Card from './Card/Card';

const cards = (props) => {
    return (
        <div>
            {props.cardList.map((card, index) => {
                <Card
                    image={card.src}
                    name={card.id}
                    clicked={props.clicked}
                    key={index}
                />;
            })
        }
        </div>
    )
}

export default cards;