import React from 'react';
import Start from './components/start'
import Game from './components/game'
// TODO: backend should route between Start, Game, and End

const centerDiv = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

function App() {

  return (
    <>
    <div style={centerDiv}>
        <h2><b>Memory Gifs Game</b></h2>
    </div>

    <div>
      {(<Start />)}
      {(<Game />)}
    </div> 

    </>
  );
}

export default App;
