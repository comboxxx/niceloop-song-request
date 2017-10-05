import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hidePageButton: true
        }
    }
    render() {
        let { detail } = this.props
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button onClick={() => this.setState({ hidePageButton: !this.state.hidePageButton })} className="navbar navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" >&nbsp;{detail && detail.shopName !== false ? detail.shopName : <span></span>}</a>

                    <div >
                        <ul className="navbar-nav mr-auto" hidden={this.state.hidePageButton}>

                            <li className="nav-item">
                                <Link onClick={() => this.setState({ hidePageButton: true })} className="nav-link" to={`${this.props.id}`}>ขอเพลง</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={() => this.setState({ hidePageButton: true })} className="nav-link" to={`${this.props.id}/admin`} >Admin</Link>
                            </li>
                        </ul>

                    </div>
                </nav >
            </div >
        );
    }
}

export default Navbar;
