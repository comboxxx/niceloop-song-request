import React, { Component } from 'react';
import {
    Route,
    Switch
} from 'react-router-dom'
import * as firebaseDb from './firebaseRef'
import Navbar from './Navbar'
import SongListContainer from './SongListContainer'
import AdminPage from './AdminPage'
import Banner from './Banner'

class AppContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            detail: {}
        }

    }
    componentDidMount() {
        let self = this
        firebaseDb.settingRef.on('value', (snap) => {
            let id = this.props.match.url.slice(1);
            let val = snap.val()
            self.setState({ detail: val[id] })
        })

    }

    render() {
        let { match } = this.props
        let { detail } = this.state
        return (
            <div>
                <div >
                    <Navbar id={match.url} detail={detail} />
                    <Banner detail={detail} />
                    <Switch>
                        <Route path="/:id/admin" component={AdminPage} />
                        <Route path="/:id" component={SongListContainer} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default AppContainer;
