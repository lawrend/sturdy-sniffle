import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import ZipCodeSearchBar from './containers/ZipCodeSearchBar';
import Example from './components/example';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ZipCodeSearchBar} />
        <Route component={Example} />
      </Switch>
    )
  }
};

export default withRouter(Routes);