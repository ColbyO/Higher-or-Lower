import React from 'react';
import './App.css';
import './lost.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function Lost() {
    let score = localStorage.getItem("latestScore")

    return(
        <div className="App">
            <h1>You Lost!</h1>
            <h2>Your Score:</h2>
            <h3>{score}</h3>
            <ButtonGroup className="btnGroup">
                <Button color="primary" variant="contained" onClick={() => {window.location.href="/play"}}>Retry</Button>
                <Button color="secondary" variant="contained" onClick={() => {window.location.href="/Leaderboard"}}>Leaderboard</Button>
            </ButtonGroup>
        </div>

    );
}

export default Lost;