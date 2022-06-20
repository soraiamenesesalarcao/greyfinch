const levelReducer = (state = 'easy', action) => {
	switch(action.type) {
	    case 'START':
	    	return 'easy'
	    case 'MODERATE':
	    	return 'moderate'
	    case 'DIFFICULT':
	    	return 'difficult'	
	    default:
	    	return 'easy';
  }
};

export default levelReducer;