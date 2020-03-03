import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import PlayoffChoice from './playoffChoice';

class Main extends Component {
    render(){

      var home = "/#/main";
      var about = "/#/plaoyffBracketPage";

      return (
        <>
          <menubar className="Menu-bar">
               <a href={home}><h3>Home</h3></a>
               <a href={about}><h3>About</h3></a>
          </menubar>
          <PlayoffChoice />
        </>
      )
    }
}

export default Main;