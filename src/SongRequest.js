import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link, Switch
} from 'react-router-dom'

class SongRequest extends Component {
    render() {
        let footerStyle = {
            backgroundColor: 'grey',
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0
        }
        let { match } = this.props
        return (
            <div style={footerStyle}>
                <br /><br />
                <center>
                    <button className="btn btn-danger" style={{ width: '90%', marginBottom: '10' }} onClick={() => this.props.showModal()}>
                        <span className="oi oi-musical-note"></span>
                        &nbsp;ขอเพลง</button>
                </center>
            </div>
        );
    }
}

export default SongRequest;
