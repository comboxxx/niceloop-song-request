import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './open-iconic-master/font/css/open-iconic-bootstrap.css'
// import 'mdbootstrap/css/mdb.css'
// import 'mdbootstrap/js/mdb.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import AppContainer from './AppContainer'

class App extends Component {

  render() {
    return (
      <div >
        <Router>
          <Switch>
            <Route path="/:id" component={AppContainer} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
