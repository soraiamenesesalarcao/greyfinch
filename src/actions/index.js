//// loadingGIFReducer
export const startLoadingGIF = () => {
	return {
		type: 'START'
	}
}
export const finishLoadingGIF = () => {
	return {
		type: 'FINISH'
	}
}
export const errorLoadingGIF = () => {
	return {
		type: 'ERROR'
	}
}


//// GIFSReducer
export const dataGIFS = (data) => {
	return {
		type: 'DATA',
		data: data
	}
}




//// childReducer
export const nameChild = (name) => {
	return {
		type: 'NAME',
		name: name
	}
}


//// levelReducer
export const easyLevel = () => {
	return {
		type: 'EASY'
	}
}
export const moderateLevel = () => {
	return {
		type: 'MODERATE'
	}
}
export const difficultLevel = () => {
	return {
		type: 'DIFFICULT'
	}
}
