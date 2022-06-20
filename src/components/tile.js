import React, { useState } from 'react';
import tile from '../assets/tile_blue.png';
import Timer from './timer'
import Button from "./styles/Button"

const Tile = ({idTile, idGifToUse, gifURL, time, correct, clicked1, triggerClicked, triggerTimerStopped, isDisabled}) => {

	//TODO: the params should  be serialized into a database
	//TODO: logic should be on backend
	//TODO: use backend to inform which tiles should be visible

	const [id, setId] = useState(idTile);			// id to identify the tile
	const [idGif, setIdGif] = useState(idGifToUse);	// the id of the gif that should be loaded when clicked
	const [img, setImage] = useState(gifURL);		// th eurl for the gif that should be loaded when clicked
	const [clicked, setClicked] = useState(false)	// flag to know if the tile was clicked
	const [showTime, setShowTime] = useState(time)	// how much time the tile should be visible
	var timeout;

	// turn the tile visible
	const onClickHandler = event => {
		if(!clicked){
			triggerClicked([id , idGif]); // alert the game that a click was made
			setClicked(true);
		}
		if(clicked1 === undefined){
			timeout = new Timer(function() {
    			triggerTimerStopped();
		  		setClicked(false);
			},  showTime * 1000); //should be stopped earlier
		}
		else{
			timeout = new Timer(function() {
				triggerTimerStopped();
		  		setClicked(false);
			}, showTime * 800);
		}
	}

	return (
		<>
			{correct === 'not matched'? 
				<Button disabled={clicked || isDisabled} onClick={onClickHandler}><img src={!clicked && correct? tile : img} alt="tile" height="100px" width="100px"/></Button>:
				<Button disabled={true}><img src={img} alt="tile" height="100px" width="100px"/></Button>
			}
		</>
	)
}

export default Tile;