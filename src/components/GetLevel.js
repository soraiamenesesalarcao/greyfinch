
import React, { useState } from 'react';
import {easyLevel, moderateLevel, difficultLevel} from '../actions'
import {useSelector, useDispatch} from 'react-redux'

const levels = ['easy', 'moderate', 'difficult'];

const GetLevel = ({triggerUpdateLevel}) => {

  const [level, setLevel] = useState(levels[Math.floor(Math.random()*levels.length)]);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setLevel(event.target.value);
    // the dispatch only takes effect on the following refresh of page
    switch (level){
        case 'easy':
          dispatch(easyLevel());
          break;
        case 'moderate':
          dispatch(moderateLevel());
          break;
        case 'difficult':
          dispatch(difficultLevel());
          break;
    }
    triggerUpdateLevel(level)
  }

  return (
    <label>
      Pick your level:
        <select value={level} onChange={handleChange}>
          <option value="easy">Easy</option>
          <option value="moderate">Moderate</option>
          <option value="difficult">Difficult</option>
        </select>
      </label>
  );
}

export default GetLevel;