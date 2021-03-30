import React from 'react';
import './App.css';
import './info.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function Info() {


    return(
        <div className="App">
            <section className="infoSection">
                <h1>HOW TO PLAY.</h1>
                <p>Two numbers are randomly selected from 0 to 13. One of the numbers are revealed to you, you then must guess if the other number is higher or lower than 
                    the number that is being shown. If you successfully guess the answer you will receive 1 score and be allowed to continue guessing on newly geneterated numbers.
                    However if you guess wrong, you lose and cannot continue scoring points although your score will be listed in a leaderboard that you can view.
                    Equal Numbers count as passes.
                </p>
            </section>
            <ButtonGroup className="btnGroup">
                <Button color="primary" variant="contained" onClick={() => {window.location.href="/play"}}>Start Game</Button>
                <Button color="secondary" variant="contained" onClick={() => {window.location.href="/Leaderboard"}}>Leaderboard</Button>
            </ButtonGroup>
        </div>

    );
}

export default Info;