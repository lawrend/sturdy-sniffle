import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Homepage from './components/homepage.js'
import ZipCodeSearchBar from './containers/ZipCodeSearchBar';
import Example from './components/example';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/searchbar" component={ZipCodeSearchBar} />
        <Route component={Example} />
      </Switch>
      )
}
};

export default withRouter(Routes);
