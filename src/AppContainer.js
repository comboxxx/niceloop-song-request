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
import SongRequestModal from './SongRequestModal'

class AppContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            detail: {},
            modalVisible: false
        }
        this.showModal = this.showModal.bind(this)
        this.closeModal = this.closeModal.bind(this)

    }
    componentDidMount() {
        let self = this
        firebaseDb.settingRef.on('value', (snap) => {
            let id = this.props.match.url.slice(1);
            let val = snap.val()
            self.setState({ detail: val[id] })
        })

    }
    showModal() {
        this.setState({
            modalVisible: true
        })
    }

    closeModal() {
        this.setState({
            modalVisible: false
        })
    }
    render() {
        let { match } = this.props
        let { detail } = this.state
        return (
            <div >
                <Navbar id={match.url} detail={detail} showModal={this.showModal} />
                <div style={{ overflowY: 'scroll'}}>
                    <Banner detail={detail} />
                    <Switch>
                        <Route path="/:id/admin" component={AdminPage} />
                        <Route path="/:id" component={SongListContainer} />
                    </Switch>
                    <SongRequestModal modalVisible={this.state.modalVisible} closeModal={this.closeModal} />
                </div>
            </div>
        );
    }
}

export default AppContainer;
