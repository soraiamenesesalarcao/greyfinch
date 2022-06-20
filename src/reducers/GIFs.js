const GIFsReducer = (state = [], action) => {
	switch(action.type) {
		case 'DATA':
	    	return action.data
	    default:
	    	return state
  }
};

export default GIFsReducer;