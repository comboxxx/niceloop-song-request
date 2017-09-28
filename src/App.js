import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './open-iconic-master/font/css/open-iconic-bootstrap.css'
// import './customCss.css'
import {
  BrowserRouter as Router,
  Route,
  Link, Switch
} from 'react-router-dom'
import SongListContainer from './SongListContainer'
import Navbar from './Navbar'
import Banner from './Banner'
//import { Button, Modal, OverlayTrigger } from 'react-bootstrap'

class App extends Component {

  render() {
    return (
      <div>
        
        <Navbar />
        <Banner />
        <Router>
          <Switch>
            <Route path="/:id" component={SongListContainer} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
