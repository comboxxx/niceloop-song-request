import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link, Switch
} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" >&nbsp;3 วัน 2 คืน</a>
                </nav>
            </div>
        );
    }
}

export default Navbar;
