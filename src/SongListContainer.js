import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link, Switch
} from 'react-router-dom'
import SongRequest from './SongRequest'
import SongList from './SongList'
import * as firebaseDb from './firebaseRef'
import FilterButton from './FilterButton'
import SongRequestModal from './SongRequestModal'

class SongListContainer extends Component {



  constructor(props) {
    super(props)
    this.state = {
      list: {},
      modalVisible: false,
      songFilter: 'time'
    }
    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.changeSongFilter = this.changeSongFilter.bind(this)
  }

  componentDidMount() {

    let id = this.props.match.params.id;
    firebaseDb.start(id);

    let self = this
    firebaseDb.songRef.on('value', (snap) => {
      let val = snap.val()
      self.setState({ list: val })
    })

  }

  componentWillUnmount() {
    firebaseDb.songRef.off('value')
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
  changeSongFilter(value) {
    this.setState({
      songFilter: value
    })
  }
  render() {
    debugger
    return (
      <div>


        <SongRequestModal modalVisible={this.state.modalVisible} closeModal={this.closeModal} />
        <FilterButton changeSongFilter={this.changeSongFilter} />
        <SongList list={this.state.list} songFilter={this.state.songFilter} />
        <SongRequest match={this.props.match} showModal={this.showModal} />
      </div>
    );
  }
}

export default SongListContainer;
