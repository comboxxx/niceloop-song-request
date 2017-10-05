import React, { Component } from 'react';
import SongRequest from './SongRequest'
import SongList from './SongList'
import * as firebaseDb from './firebaseRef'
import FilterButton from './FilterButton'
import SongRequestModal from './SongRequestModal'
import _ from 'lodash'

class SongListContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: {},
      listRow: [],
      modalVisible: false,
      filter: 'time'
      // songFilter: 'time'
    }
    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.changeSongFilter = this.changeSongFilter.bind(this)
    this.updateVote = this.updateVote.bind(this)

  }

  componentDidMount() {

    let id = this.props.match.url;
    firebaseDb.start(id);
    let self = this
    firebaseDb.songRef.on('value', (snap) => {
      let val = snap.val()
      let list = {}
      let listRow = []
      let oldList = this.state.listRow
      _.map(val, (data, key) => {
        listRow.push({ key, dateTime: data.dateTime, vote: data.vote })
        list = {
          ...list,
          [key]: {
            ...data
          }
        }
      })
      debugger
      if (oldList.length === listRow.length) {
        self.setState({
          list,
          listRow: oldList,
        })
      }
      else {
        let sortedList
        if (this.state.filter === 'time') {
          sortedList = _.orderBy(listRow, (item) => {
            return -item.dateTime;
          })
        } else {
          sortedList = _.orderBy(listRow, (item) => {
            return -item.vote;
          })
        }

        self.setState({
          list,
          listRow: sortedList
        })
      }
    })

  }

  componentWillUnmount() {
    firebaseDb.songRef.off()
  }
  updateVote(key, vote, index) {

    firebaseDb.songRef.child(key).update({ vote: vote + 1 })
    let newListRow = this.state.listRow
    newListRow[index].vote = newListRow[index].vote + 1

    this.setState({ listRow: newListRow })

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
    let newSongList

    if (value === 'vote') {
      newSongList = _.orderBy(this.state.listRow, (item) => {
        return -item.vote;
      })
      this.setState({ listRow: newSongList, filter: value })
    }
    else {
      newSongList = _.orderBy(this.state.listRow, (item) => {
        return -item.dateTime;
      })
      this.setState({ listRow: newSongList, filter: value })
    }

  }
  render() {
    return (
      <div>
        <div style={{ overflowY: 'scroll ' }}>
          <SongRequestModal modalVisible={this.state.modalVisible} closeModal={this.closeModal} />
          <FilterButton changeSongFilter={this.changeSongFilter} />
          <SongList list={this.state.list}
            updateVote={this.updateVote}
            listRow={this.state.listRow} />
        </div>
        <SongRequest match={this.props.match} showModal={this.showModal} />
      </div>
    );
  }
}

export default SongListContainer;
