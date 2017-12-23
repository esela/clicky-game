import React from 'react';

const Navbar = (props) => {
    return (
        <div className="nav navbar navbar-light bg-dark">
            <a className="nav navbar-brand" href="">{props.title}</a>
        </div>
    );
}

export default Navbar;