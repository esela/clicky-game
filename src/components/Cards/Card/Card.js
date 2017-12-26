import React from 'react';

const card = (props) => {
    return (
        <li>
            <img src={props.url} alt={props.alt} width="200px" height="200px" alt={props.name} class="img-thumbnail" />
        </li>
    )
} 
export default card;