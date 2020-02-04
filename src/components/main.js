import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import PlayoffChoice from './playoffChoice';
import PlayoffBracketPage from './playoffBracketPage';

class Main extends Component {
    render(){
      return (
        <menubar className="Menu-bar">
            <Link exact path="./main"><h3>Home</h3></Link>
            <Link path="./playoffBracketPage"><h3>About</h3></Link>
        </menubar>
      )
    }
}

export default Main;