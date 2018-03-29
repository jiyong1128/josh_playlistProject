import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home'
import Playlist from './Playlist'
import SinglePlaylist from './SinglePlaylist'
import Song from './Song'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Playlists" component={Playlist} />
      <Route exact path="/Playlist/:id" component={SinglePlaylist} />
      <Route exact path="/Songs" component={Song} />
    </Switch>
  </Router>
)

export default App