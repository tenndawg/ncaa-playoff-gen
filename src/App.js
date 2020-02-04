import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Main from './components/main';
import PlayoffChoice from './components/playoffChoice';
import PlayoffBracketPage from './components/playoffBracketPage';

class App extends Component {
  render(){
    return (
      <div className="App">
        <menubar className="Menu-bar">
          <Router>
            <Link path="App"><h3>Home</h3></Link>
            <Link path="./components/playoffBracketPage"><h3>About</h3></Link>
          </Router>
        </menubar>
        <PlayoffChoice />
      </div>
    );
  }
}

export default App;
