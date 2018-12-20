// the current landing page which renders the Routes component
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            An app using Spotify's API and maybe a graphing api too
          </p>
          <p>(Change the link below)</p>
          <a
            className="App-link"
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out Spotify's API
          </a>
          <Routes />
        </header>
      </div>
    );
  }
}

export default App;
