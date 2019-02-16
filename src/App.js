// the current landing page which renders the Routes component
import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
import { Link } from 'react-router-dom';
import {Menu, Container, Divider, Grid} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Link to="/songsearch">Search for Songs</Link>
            </Menu.Item>
            <Menu.Item as='a' floated='right'>
              <a
                className="App-link"
                href="https://developer.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out Spotify's API
              </a>
            </Menu.Item>
          </Container>
        </Menu>
        <Container style={{marginTop: '7em'}}>
          <Routes />
        </Container>
      </div>
      );
}
}

export default App;

