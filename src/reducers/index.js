import levelReducer from './level';
import childReducer from './child';
import loadingGIFReducer from './loadingGIF'
import GIFsReducer from './GIFs'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
	level: levelReducer,
	child: childReducer,
	loadingGIF: loadingGIFReducer,
	GIFs: GIFsReducer,
});

export default allReducers;