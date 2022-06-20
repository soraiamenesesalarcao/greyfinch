const loadingGIFReducer = (state = 'start', action) => {
	switch(action.type){
		case 'START':
			return 'start'; 
	    case 'FINISH':
	     	return 'finish';
	    case 'ERROR':
	     	return 'error'; 	
	    default:
	    	return state;  
  }
};

export default loadingGIFReducer;