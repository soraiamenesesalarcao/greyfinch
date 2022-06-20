import { useState } from 'react';
import {nameChild} from '../actions'
import {useDispatch} from 'react-redux'

const GetChildName = () => {

  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onChange = (e) => {
    setValue(e.target.value);
    dispatch(nameChild(e.target.value));
  }

  return {
    value,
    onChange,
  };
}

export default GetChildName;