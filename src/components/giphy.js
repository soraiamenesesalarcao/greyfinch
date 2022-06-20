import { useEffect} from "react";
import axios from "axios";
import getShuffledArr from './getShuffledArr'
import {startLoadingGIF, finishLoadingGIF, errorLoadingGIF, dataGIFS} from '../actions'
import {useDispatch} from 'react-redux'

const GIPHY = (query, numResults) => {

  const dispatch = useDispatch();

  useEffect(() => {

    const fetchData = async () => {
      dispatch(startLoadingGIF());

      try {

        const results = await axios("https://api.giphy.com/v1/gifs/search", {
          params: {
            api_key: "D31L73ySufmBJ3YBDkmbVnH9TuWXuvMa",
            q: query,
            limit: numResults,
            rating: "g" // avoid not appropriate content
          }
        });
        const data = [...getShuffledArr(results.data.data), ...getShuffledArr(results.data.data)]
        dispatch(dataGIFS(data))

      } catch (err) {
        dispatch(errorLoadingGIF());
        setTimeout(() => dispatch(startLoadingGIF()), 4000);
      }

      dispatch(finishLoadingGIF());
    };

    fetchData();

    return () => console.log("Cleanup..");
  }, []);
};

export default GIPHY;