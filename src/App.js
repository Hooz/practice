import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <div><Link to='/list'>列表页面</Link></div>
          <div><Link to='/detail'>详情页面</Link></div>
          <div><Link to='/editTableCell'>BulePrint</Link></div>
        </div>
      </div>
    );
  }
}

export default App;
