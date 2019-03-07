// the current landing page which renders the Routes component
import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
import {Menu, Container} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item href="/" header>
              Home
            </Menu.Item>

            <Menu.Item href="/songsearch" >
              Search for Songs
            </Menu.Item>
            <Menu.Item href="/songoftheday" >
              Billboard Hits by Date
            </Menu.Item>

            <Menu.Item href="https://developer.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              floated='right'>
              Check out Spotify's API
            </Menu.Item>
          </Container>
        </Menu>
        <Container>
          <Routes />
        </Container>
      </div>
    );
}
}

export default App;

