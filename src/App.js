import React from 'react';
import './App.css';
import GameLogic from './gamepg.js';
import Info from './info.js';
import Lost from './lost.js';
import Leaderboard from './Leaderboard.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import SignIn from './signin';


function App() { 

  return (  
    <Router>
    <div class="App">
    <img className="logo" src="/assests/Logo.png" alt="" onClick={() => {window.location.href="/"}}></img>
        <Switch>
          <Route path="/" exact component={SignIn}/>
          <Route path="/info" component={Info}/>
          <Route path="/play" component={GameLogic}/>
          <Route path="/lost" component={Lost}/>
          <Route path="/leaderboard" component={Leaderboard}/>
        </Switch>
    </div>
    </Router>
  );
}


export default App;
