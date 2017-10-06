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
        let { detail, showModal } = this.props
        return (
            <div>

                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button onClick={() => showModal()}
                        className="btn btn-primary navbar-toggler-right" >
                        <span className="oi oi-musical-note"></span> &nbsp;
                        ขอเพลง
                    </button>
                    <a className="navbar-brand" >&nbsp;{detail && detail.shopName !== false ? detail.shopName : <span></span>}</a>
                </nav >

            </div >
        );
    }
}

export default Navbar;

{/* <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
<button onClick={() => showModal()}
    className="navbar navbar-toggler-right" style={{ backgroundColor: 'lightgrey' }}>
    <span style={{ color: 'red' }}>ขอเพลง</span>
</button>
<a className="navbar-brand" >&nbsp;{detail && detail.shopName !== false ? detail.shopName : <span></span>}</a>
</nav > */}

{/* <div >
    <ul className="navbar-nav mr-auto" hidden={this.state.hidePageButton}>

        <li className="nav-item">
            <Link onClick={() => this.setState({ hidePageButton: true })} className="nav-link" to={`${this.props.id}`}>ขอเพลง</Link>
        </li>
        <li className="nav-item">
            <Link onClick={() => this.setState({ hidePageButton: true })} className="nav-link" to={`${this.props.id}/admin`} >Admin</Link>
        </li>
    </ul>

</div> */}