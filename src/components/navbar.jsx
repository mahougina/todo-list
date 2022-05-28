import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (
            <nav className ="navbar navbar-light bg-light">
                <a className = "navbar-brand" href="#">
                Things To Do: {" "} 
                <span className="badge rounded-pill bg-secondary">
                    {this.props.totalCounters}
                </span>
                </a>
            </nav>
        );
    }
}
 
export default NavBar;