import React, { Component } from 'react';

class SongRequest extends Component {
    render() {
        let footerStyle = {
            backgroundColor: 'grey',
            // position: 'absolute',
            // left: 0,
            // bottom: 0,
            // right: 0
            bottom: 'auto',
            left: 0,
            position: 'absolute',
            right: 0
        }
        return (
            <div style={footerStyle}>
                <br /><br />
                <center>
                    <button className="btn btn-danger" style={{ width: '90%', marginBottom: 10 }} onClick={() => this.props.showModal()}>
                        <span className="oi oi-musical-note"></span>
                        &nbsp;ขอเพลง</button>
                </center>
            </div>
        );
    }
}

export default SongRequest;
