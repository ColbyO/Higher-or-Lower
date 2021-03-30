import { React, useState } from 'react';
import './App.css';
import './signin.css';
import GameLogic from './gamepg.js';
import Info from './info.js';
import Lost from './lost.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';


function SignIn() {  
  const [username, setUsername] = useState('');
  localStorage.setItem("Player Name", username)

  function checkStart() {
    if (localStorage.getItem("Player Name") === "") {
      alert("You don't have a name entered!")
    } else {
      window.location.href="/info"
    }
  }

  return (  
    <Router>
    <div class="App">
      <TextField className="textName" variant="filled" label="Name" color="primary" onChange={(event) => {setUsername(event.target.value)}} required/>
      <Button className="enterBtn" color="primary" variant="contained" component={Link} to="/info" onClick={checkStart}>Enter</Button>

    </div>
    </Router>
  );
}


export default SignIn;
