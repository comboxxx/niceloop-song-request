import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link, Switch
} from 'react-router-dom'

class Banner extends Component {
    render() {
        return (
            <div>
                <img
                    src="https://www.scandichotels.com/imagevault/publishedmedia/qn6infvg30381stkubky/scandic-sundsvall-city-restaurant-verket-10.jpg"
                    style={{ height: 200, width: '100%' }} />
            </div>
        );
    }
}

export default Banner;
