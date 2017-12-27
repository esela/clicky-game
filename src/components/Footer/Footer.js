import React from 'react';

const footer = (props) => (
    <footer className="footer">
        <div className="container">
            <span className="text-muted">{props.status}</span>
        </div>
    </footer>
)

export default footer;