import { React } from 'react';
import './App.css';
import './Leaderboard.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



function Leaderboard() {  
    const leaderboarddata = JSON.parse(localStorage.getItem("Leaderboard Data")) || []; 
    const scores = []
    const names = []

    let getScores = leaderboarddata.map( Score=> {
        return ` ${Score.Score} `
    })
    scores.push(getScores)

    let getNames = leaderboarddata.map( Name=> {
        return ` ${Name.Name} `
    })
    names.push(getNames)
    
  return (  
    <div class="App">
<div class="leaderboard">
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Score</th>
            </tr>
            <tr>
                <td>{names}</td>
                <td>{scores}</td>
          </tr>
        </thead>
    </table>
    </div>
        <Button className="playBtn" color="primary" variant="contained" onClick={() => {window.location.href="/play"}}>Play</Button>
    </div>
  );
}


export default Leaderboard;
