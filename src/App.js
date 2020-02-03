import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import PlayoffChoice from './components/playoffChoice';

class App extends Component {
  render(){
    return (
      <div className="App">
        <menubar className="Menu-bar">
          <BrowserRouter>
            <Link to="/App"><h3>Home</h3></Link>
            <Link to="/components/playoffBracketPage"><h3>About</h3></Link>
          </BrowserRouter>
        </menubar>
        <PlayoffChoice />
      </div>
    );
  }
}

export default App;
