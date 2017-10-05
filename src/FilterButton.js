import React, { Component } from 'react';

class FilterButton extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid" style={{ backgroundColor: 'lightyellow' }}>
          <div className="row ">
            <div className="col col-sm-6"   >
              <button type="button"
              onClick={() => this.props.changeSongFilter('time')}
                style={{ float: 'right', width: '100%', marginTop: 10, marginBottom: 10 }}
                className="btn btn-outline-primary">ตามเวลา</button>
            </div>
            <div className="col col-sm-6" >
              <button type="button"
              onClick={() => this.props.changeSongFilter('vote')}
                style={{ float: 'left', width: '100%', marginTop: 10, marginBottom: 10 }}
                className="btn btn-outline-primary">ตาม Vote</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterButton;
