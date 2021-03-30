import { useState, React } from 'react';
import './App.css';
import './Game.css';
import Button from '@material-ui/core/Button'

function GameLogic() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0)

    let number1 =  Math.floor(Math.random() * Math.floor(13))
    let number2 =  Math.floor(Math.random() * Math.floor(13))

    const leaderboarddata = JSON.parse(localStorage.getItem("Leaderboard Data")) || []; 

    function higherCheck() {
      if (number2 <= number1) {
        setCount((c)=> c+1);
        setNumber(number1)
      } else {
        window.location.href="/lost"
        if (count > 0) {
          localStorage.setItem('latestScore', JSON.stringify(count))
          setCount(0)
          const playerArray = {
            Name: localStorage.getItem("Player Name"),
            Score: count
          }
      
          leaderboarddata.push(playerArray)
          leaderboarddata.sort( (a, b) => b.Score - a.Score) 
          localStorage.setItem("Leaderboard Data", JSON.stringify(leaderboarddata));
          
        } else {
          setCount(0)
          localStorage.setItem('latestScore', JSON.stringify(count))
          // do nothing, 0 scores dont count.
        }

      }
    }
  
    function lowerCheck() {
      if (number2 >= number1) {
        setCount((c)=> c+1);
        setNumber(number1)
      } else {
        window.location.href="/lost"
        if (count > 0) {
          localStorage.setItem('latestScore', JSON.stringify(count))
          setCount(0)
          const playerArray = {
            Name: localStorage.getItem("Player Name"),
            Score: count
          }
      
          leaderboarddata.push(playerArray)
      
          leaderboarddata.sort( (a, b) => b.Score - a.Score) 
      
          localStorage.setItem("Leaderboard Data", JSON.stringify(leaderboarddata));
          
        } else {
          setCount(0)
          localStorage.setItem('latestScore', JSON.stringify(count))
          // don't add to local storage since 0 is easier to hit.
        }

      }
    }

    
    return ( 
        <div className="App">
          <section className="Header">
            <p className="score">SCORE</p>
            <h1 className="scoreCount">{count}</h1>
          </section>
          <section className="game">
              <img src="/assests/HigherBtn.png" className="HigherBtn" onClick={higherCheck}></img>
              <img className="btn-line" src="/assests/btn-line.png"></img>
              <h1 className="currentNum">{number1}</h1>
              <img src="/assests/LowerBtn.png" className="LowerBtn" onClick={lowerCheck}></img>
          </section>
        </div>
      );
    }

export default GameLogic;