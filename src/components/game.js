import React, {useState} from "react";
import {useSelector} from 'react-redux'
import Tile from "./tile"
import Loader from "./loader";

const Game = () => {

	const useRenderGifs = (isLoading, data) => {
	  	if (isLoading === 'finished') {
	      return <Loader />;
	    } 
	    else{
			return data.map((el, index) => {
				return (
			    <>
			    	<Tile key={index} idTile={index} 
			        	idGifToUse={el.id} gifURL={el.images.fixed_height.url} 
			            time={10} correct={tilesCorrect} clicked1={clicked1} triggerClicked={triggerClicked} triggerTimerStopped={triggerTimerStopped} isDisabled={disabled}
			        />
			    </>
			    );
			});
		}
  	};

  	const triggerClicked = (clicked) => {
  		// TODO: this logic should be on the backend
  		
    	if(clicked1 === undefined){ //first click of the pair
      		setIsClicked1(clicked);
    	}
    	else { //second click of the pair
    		setDisabled(true);
      		console.log(tilesCorrect)
	      	var currentTiles = tilesCorrect
		    if(clicked1[1] === clicked[1]){ //it's a match
		    	console.log(currentTiles)
		        currentTiles[clicked1[0]] = true
		        currentTiles[clicked[0]] = true
		        setTilesCorrect(currentTiles)
		        console.log(currentTiles)
		       	setNumCorrectPairs(numCorrectPairs + 1)
		    }
		    else { //"its not a match"
		    	currentTiles[clicked1[0]] = false
		        currentTiles[clicked[0]] = false 
		    	setTilesCorrect(currentTiles)
		    }
		    // TODO: should stop the timer of the first tile clicked
		    setNumAttempts(numAttempts + 1)
		    setIsClicked1()
			}
  	}

  	const triggerTimerStopped = () => {
  		setDisabled(false);
  	}

   	const isLoading = useSelector(state => state.loadingGIFS)		// avoid display data while giphy is fetching it
   	const data = useSelector(state => state.GIFs)								// load urls
   	const [clicked1, setIsClicked1] = useState();     					// first element index of the tile, second element gif id
   	const [disabled, setDisabled] = useState(false);						// to avoid clicks on the remaining tiles
		const [tilesCorrect, setTilesCorrect] = useState(Array.apply(null, Array(12)).map(String.prototype.valueOf, 'not matched')); //should be numTiles
		const [numAttempts, setNumAttempts] = useState(0);  				// how many attempts were made so far
  	const [numCorrectPairs, setNumCorrectPairs] = useState(0);  // how many pairs correct so far

    return (
    <>
      <div className="container gifs">{useRenderGifs(isLoading, data)} </div>
      <div> Number of Attempts: {numAttempts}  </div>
      <div> Number of Correct Pairs: {numCorrectPairs} </div>
      {}
    </>
  );
};

export default Game;