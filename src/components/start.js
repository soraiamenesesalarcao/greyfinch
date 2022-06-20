import React from 'react';
import GetChildName from './getChildName'
import Giphy from './giphy'
import StyledInput from "./styles/StyledInput"
import GetLevelConfig from "./getLevelConfig"

const animals = ["cats", "dogs", "elephants", "lions", "monkeys"]
const levels = ['easy', 'moderate', 'difficult'];

const Start = () => {
  
  const childProps = GetChildName();
  const level = levels[Math.floor(Math.random()*levels.length)];  // get a random animal to be used as query
  const query = animals[Math.floor(Math.random()*animals.length)];  // get a random level to be used as query
  const numTiles = GetLevelConfig(level).NUM_TILES;

  Giphy(query, numTiles/2, level)

  return (
    <>
    <div>
      What is your name? &nbsp;
      <StyledInput {...childProps} placeholder="Type in here" />
    </div>

    <div>
      Playing level: &nbsp;
      {level}
    </div>
    </>
  );
}

export default Start;