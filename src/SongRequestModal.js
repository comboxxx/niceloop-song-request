import React, { Component } from 'react';
import Modal from 'react-modal'
import * as firebaseDb from './firebaseRef'
import moment from 'moment'
class SongRequestModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            song: '',
            by: '',
            requestFail: false
        }
        this.sendSongRequest = this.sendSongRequest.bind(this)
    }

    sendSongRequest() {
        let { song, by } = this.state
        if (song !== '') {
            firebaseDb.songRef.push({
                song: song,
                by: by,
                dateTime: moment().toISOString(),
                vote: 0,
                status:'pending'
            })
            this.setState({
                song: '',
                by: '',
                requestFail: false
            })
            this.props.closeModal()
        } else {
            this.setState({
                requestFail: true
            })
        }

    }
    render() {


        let { song, requestFail, by } = this.state
        return (
            <Modal
                isOpen={this.props.modalVisible}
                onRequestClose={() => this.props.closeModal()}
                contentLabel="Modal"
            >
                <div >
                    <div style={{ padding: 20 }}>
                        <h3 >ขอเพลง</h3>
                        {requestFail && <span style={{ color: 'red' }}>กรุณากรอกชื่อเพลง</span>}
                        <hr />
                        <div className="form-group" >
                            <br />
                            <input type="text" className="form-control" placeholder="ชื่อเพลง"
                                onChange={(e) => this.setState({ song: e.target.value })}
                                value={song} />
                            <br />
                            <input type="text" className="form-control" placeholder="โต๊ะ / ชื่อ ผู้ขอ"
                                onChange={(e) => this.setState({ by: e.target.value })}
                                value={by} />
                        </div>
                        <div className="row ">
                            <div className="col col-sm-6">
                                <button type="button"
                                    onClick={() => {
                                        this.setState({
                                            song: '',
                                            by: '',
                                            requestFail: false
                                        })
                                        this.props.closeModal()
                                    }}
                                    style={{ float: 'left', width: '100%', marginTop: 10, marginBottom: 10 }}
                                    className="btn btn-danger">ยกเลิก</button>
                            </div>
                            <div className="col col-sm-6" >
                                <button type="button"
                                    onClick={() => { this.sendSongRequest() }}
                                    style={{ float: 'left', width: '100%', marginTop: 10, marginBottom: 10 }}
                                    className="btn btn-primary ">ส่ง</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

        )
    }
}

export default SongRequestModal;
