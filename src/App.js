// the current landing page which renders the Routes component
import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            An app using Spotify's API and maybe a graphing api too
          </p>
          <a
            className="App-link"
            href="https://developer.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out Spotify's API
          </a>
          <Routes />
          <p>
            <Link to="/songsearch">Search for Songs</Link></p>
        </header>
      </div>
    );
  }
}

export default App;
