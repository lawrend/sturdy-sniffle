import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ZipCodeSearchBar from './containers/ZipCodeSearchBar.js';
import Routes from './routes';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Let's use NASA's API for something, shall we?
          </p>
          <a
            className="App-link"
            href="https://www.nasa.gov"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out NASA
          </a>
          <Routes />

        </header>
      </div>
    );
  }
}

export default App;
