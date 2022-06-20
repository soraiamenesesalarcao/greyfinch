const childReducer = (state = '', action) => {
	switch(action.type) {
		case 'NAME':
	    	return action.name
	    default:
	    	return state
  }
};

export default childReducer;