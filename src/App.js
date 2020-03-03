import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/main';
import PlayoffBracketPage from './components/playoffBracketPage';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/main' exact={true} component={ Main } />        
            <Route path='/playoffBracketPage' component={ PlayoffBracketPage } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
