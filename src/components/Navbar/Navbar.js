import React from 'react';

const Navbar = (props) => {
    return (
        <div className="nav navbar navbar-light bg-dark">
            <h1 className="nav navbar-brand">Clickity Giphy Game</h1>
            <div className="input-group">
                <span className="input-group-addon" idname="basic-addon3">Search</span>
                <input type="text" className="form-control" placeholder={this.props.search} value={props.search} idname="basic-url" />
                <span className="input-group=addon"><button type="button" onClick={props.handleSearch}>Go!</button></span>   
            </div>
        </div>
    );
}

export default Navbar;