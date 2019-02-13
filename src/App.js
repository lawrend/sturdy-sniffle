// the current landing page which renders the Routes component
import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
import { Link } from 'react-router-dom';
import {Container, Divider, Grid} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Grid>
            <Grid.Row>
            <Grid.Column floated="left" textAlign="left" width={8}>
              <Link to="/songsearch">Search for Songs</Link>
            </Grid.Column>
            <Grid.Column floated="right" textAlign="right" width={8}>
              <a
                className="App-link"
                href="https://developer.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out Spotify's API
              </a>
            </Grid.Column>

          </Grid.Row>
            <Grid.Row>

            <Grid.Column>
                <Routes />

            </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
      );
  }
}

export default App;
