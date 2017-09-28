import React, { Component } from 'react';
import {songRef} from './firebaseRef'
import {
    BrowserRouter as Router,
    Route,
    Link, Switch
} from 'react-router-dom'
import _ from 'lodash'
import moment from 'moment'

class SongList extends Component {
constructor(props)
{
    super(props)
    this.updateVote= this.updateVote.bind(this)
}

updateVote(key,vote)
{
    songRef.child(key).update({vote:vote+1})
}
    render() {


        let list_original = []

        _.map(this.props.list, (data, key) => {
            list_original.push({ ...data, key, dateTime: data.dateTime })
        })
        let beforeSort
        
        if (this.props.songFilter === 'vote') {
            beforeSort = _.orderBy(list_original, (item) => {
                return -item.vote;
            })
        }
        else {
            beforeSort = _.orderBy(list_original, (item) => {
                return item.dateTime;
            })
        }
        let sortedData = beforeSort


        // let listArray = [];
        // for (var key in list_original) {
        //     listArray.push(list_original[key])
        // }

        return (
            <div style={{  height: 300, overflowY: 'scroll ' }} >
                {sortedData.map((song, i) => {
                    let songListColor
                    if (i % 2 === 0) {
                        songListColor = 'white'
                    }
                    else {
                        songListColor = 'lightblue'
                    }
                    return (
                        <div className="container-fluid" style={{ backgroundColor: 'lightyellow' }} key={i}>
                            <div className="row ">
                                <div className="col col-9" style={{ backgroundColor: songListColor }}>
                                    <h4 style={{ paddingLeft: 10, paddingTop: 10 }}>{song.song} </h4>

                                    <span style={{ paddingLeft: 10 }}>Time : {moment(song.dateTime).format("h:mm")}&nbsp; By: {song.by}</span>
                                </div>
                                <div className="col col-3" style={{ backgroundColor: songListColor, borderLeft: 'solid', borderLeftColor: 'grey' }}>
                                    <h2 style={{ paddingTop: 17, paddingLeft: 10, color: 'blue' }}>
                                        <a onClick={() => this.updateVote(song.key,song.vote)}>
                                            <span className="oi oi-thumb-up"></span></a>
                                    </h2>
                                    <h6 style={{ paddingLeft: 10 }}>{song.vote}</h6>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default SongList;
