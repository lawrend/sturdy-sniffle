import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ZipCodeSearchBar from './containers/zip_code_search_bar.js';

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
          <ZipCodeSearchBar />
        </header>
      </div>
      );
}
}

export default App;
