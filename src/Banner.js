import React, { Component } from 'react';

class Banner extends Component {
    render() {
        let { detail } = this.props
        return (
            <div>
                <img
                    src={detail.picture}
                    style={{ height: 200, width: '100%' }}
                    alt='banner'/>
            </div>
        );
    }
}

export default Banner;
