import constants from '../constants'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a sample reducer or user management. If you remove 
	and use your own reducers, remember to update the store 
	file (../stores/index.js) with your reducers.
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/



var initialState = {
	all: null,
	selected: null
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {

		case constants.FEEDS_RECEIVED:
            newState['all'] = action.data
            // console.log('feeds_received: '+ JSON.stringify(action.data))
			return newState
		
		case constants.FEEDS_RECEIVED:
			let all = newState.all ? Object.assign([], newState.all) : []
			all.unshift(action.data)
			newState['all'] = all
			return newState

		case constants.SELECT_FEED:
			newState['selected'] = action.data
			return newState

		default:
			return state
	}
}