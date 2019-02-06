// import all relevant pieces of react-router-dom, and all components rendered by routes
import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Homepage from './components/homepage.js'
import Example from './components/example';
import SongSearchBar from './containers/SongSearchBar.js';
import SongDetail from './containers/SongDetail.js';
import SongAnalysis from './containers/SongAnalysis.js';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/songsearch" component={SongSearchBar} />
        <Route path="/songdetail/:id" component={SongDetail} />
        <Route path="/songdetail/:id" component={SongAnalysis} />
        <Route component={Example} />
      </Switch>
      )
}
};

export default withRouter(Routes);
