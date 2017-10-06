import React, { Component } from 'react';
import SongRequest from './SongRequest'
import SongList from './SongList'
import * as firebaseDb from './firebaseRef'
import FilterButton from './FilterButton'
import _ from 'lodash'

class SongListContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: {},
      listRow: [],
      filter: 'time'
    }

    this.changeSongFilter = this.changeSongFilter.bind(this)
    this.updateVote = this.updateVote.bind(this)

  }

  componentDidMount() {

    let id = this.props.match.url;
    firebaseDb.start(id);
    let self = this
    firebaseDb.songRef.on('value', (snap) => {
      let list = snap.val()
      let listRow = []
      let oldList = this.state.listRow

      let newList = []
      let lastList = []
      let index = 0
      let newListIndex = 0
      _.map(list, (data, key) => {

        if (oldList[index] && oldList[index].key === key) {
          newList.push({ key, dateTime: data.dateTime, vote: data.vote, row: newListIndex, song: data.song })
          newListIndex = newListIndex + 1
        }
        else {
          lastList.push({ key, dateTime: data.dateTime, vote: data.vote, song: data.song })
        }
      })

      if (lastList.length > 0) {
        lastList.map((item, i) => {
          newList.push({ ...item, row: newListIndex })
          newListIndex = newListIndex + 1
        })
      }
      debugger
      if (this.state.filter === 'time') {
        newList = _.orderBy(newList, (item) => {
          return item.dateTime // TODO: ใส่ - แล้วรวน
        })
        newList = _.reverse(newList)
      }
      else {
        newList = _.orderBy(newList, (item) => {
          return item.row;
        })
      }

      self.setState({
        list,
        listRow: newList
      })
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

        return item.dateTime;
      })
      newSongList = _.reverse(newSongList)
      this.setState({ listRow: newSongList, filter: value })
    }

  }
  render() {
    return (
      <div>
        <div >
          <FilterButton changeSongFilter={this.changeSongFilter} />
          <SongList list={this.state.list}
            updateVote={this.updateVote}
            listRow={this.state.listRow} />
        </div>
        {/* <SongRequest match={this.props.match} showModal={this.showModal} /> */}
      </div>
    );
  }
}

export default SongListContainer;
