import React, { Component } from 'react';
import moment from 'moment'

class SongList extends Component {
   
    render() {
        let { list, listRow ,updateVote} = this.props

        return (
            <div style={{ height: 300, }} >
                {
                    listRow.map((song, i) => {
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
                                        <h4 style={{ paddingLeft: 10, paddingTop: 10 }}>{list[song.key].song} ({list[song.key].status})</h4>

                                        <span style={{ paddingLeft: 10 }}>Time : {moment(list[song.key].dateTime).format("h:mm")}&nbsp; By: {list[song.key].by}</span>
                                    </div>
                                    <div className="col col-3" style={{ backgroundColor: songListColor, borderLeft: 'solid', borderLeftColor: 'grey' }}>
                                        <h2 style={{ paddingTop: 17, paddingLeft: 10, color: 'blue' }}>
                                            <a onClick={() => updateVote(song.key, list[song.key].vote,i)}>
                                                <span className="oi oi-thumb-up"></span></a>
                                        </h2>
                                        <h6 style={{ paddingLeft: 10 }}>{list[song.key].vote}</h6>
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
