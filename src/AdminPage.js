import React, { Component } from 'react';
import * as firebaseDb from './firebaseRef'
class SongListContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            image: '',
            setting: {},
            isUploaded: false,
        }
        this._handleImageChange = this._handleImageChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidMount() {
        let self = this
        firebaseDb.settingRef.on('value', (snap) => {
            // let id = this.props.match.url.slice(1);
            let id = this.props.match.params.id

            let val = snap.val()
            self.setState({ setting: val[id] })
        })

    }

    componentWillUnmount() {
        firebaseDb.settingRef.off()
    }

    _handleImageChange(image) {
        let picTobeUpload = image.target.files[0]
        let id = this.props.match.params.id;

        let uploadImageRef = firebaseDb.musicBannerRef.child(id).child(picTobeUpload.name)
        let pictureUrl
        uploadImageRef.put(picTobeUpload).then(function (snapshot) {
            pictureUrl = snapshot.downloadURL
            let updateSettingRef = firebaseDb.settingRef.child(id)
            let obj = { picture: pictureUrl }
            updateSettingRef.update(obj)
            console.log('Uploaded a blob or file!');

        });
        this.setState({
            isUploaded: true,
        })
    }

    handleSubmit() {
        let id = this.props.match.params.id;
        let { setting } = this.state

        let updateSettingRef = firebaseDb.settingRef.child(id)
        let obj = { shopName: setting.shopName }
        updateSettingRef.update(obj)
    }
    render() {
        let { setting, isUploaded, uploading } = this.state
        return (
            <div className="container">
                <div style={{ overflowY: 'scroll ' }}>





                    <div className="form-group " style={{ paddingTop: 30 }}>
                        <span>ชื่อร้าน</span>
                        <div >
                            <input type="text" value={setting.shopName ? setting.shopName : ''}
                                className="form-control" placeholder="ชื่อร้าน"
                                onChange={(e) => this.setState({
                                    setting: {
                                        ...setting,
                                        shopName: e.target.value
                                    }
                                })} />
                        </div>
                    </div>
                    <div >

                        {isUploaded === false ? (<div style={{ paddingBottom: 30 }} >
                            {/* <span>อัพโหลดไฟล์</span> */}
                            <div >
                                <center>
                                    <label className="custom-file">
                                        <input type="file" id="file" className="custom-file-input"
                                            onChange={(e) => this._handleImageChange(e)} placeholder="rr" />
                                        <span className="custom-file-control"></span>
                                    </label>
                                </center>
                            </div>
                        </div>) : (<div><span style={{ color: 'green' }}>...อัพโหลดรูปภาพสำเร็จ...</span></div>)}
                    </div>

                    <center><button hidden={uploading} type="submit" className="btn btn-primary" onClick={() => this.handleSubmit()}>Submit</button></center>
                </div>
            </div>
        );
    }
}

export default SongListContainer;
