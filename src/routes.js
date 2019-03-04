// import all relevant pieces of react-router-dom, and all components rendered by routes
import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Homepage from './components/homepage.js'
import ErrorRoute from './components/ErrorRoute';
import SongSearchBar from './containers/SongSearchBar.js';
import SongSpecifics from './components/SongSpecifics.js';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/songsearch" component={SongSearchBar} />
        <Route path="/songspecifics/:id" component={SongSpecifics} />
        <Route component={ErrorRoute} />
      </Switch>
      )
}
};

export default withRouter(Routes);

// either works in Route above but not both <Route path="/songdetail/:id" component={SongDetail} />
        // <Route path="/songdetail/:id" component={SongAnalysis} />
