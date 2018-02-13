import constants from '../constants'
import { TurboClient, HTTP } from '../utils'


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample actions for User managment.
	Feel free to remove and replace with your own actions
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

const getRequest = (endpoint, params, actionType) => {
	return dispatch => HTTP.get(endpoint, params)
		.then(data => {
			if (actionType != null){
				dispatch({
					type: actionType,
					params: params, // can be null
					data: data
				})
			}
			return data
		})
		.catch(err => {
			throw err
		})
}

export default {

	fetchRssFeed: (url, params) => {
		return dispatch => {
			return dispatch(getRequest(url, params, constants.RSS_FEED_RECEIVED))
		}
	},

	selectFeed: (feed) => {
		return {
			type: constants.SELECT_FEED,
			data: feed
		}
	},

	fetchFeeds: (params) => {
		return dispatch => {
			return dispatch(TurboClient.getRequest('feed', params, constants.FEEDS_RECEIVED))
		}
	},

	addFeed: (params) => {
		return dispatch => {
			return dispatch(TurboClient.postRequest('feed', params, constants.ADD_FEED))
		}
	}

	// fetchUsers: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
	// 	}
	// },

	// addUser: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED))
	// 	}
	// },

	// // Unlike addUser, register() also maintains a session for login state. After calling 
	// // TurboClient.createUser(), the new user is logged in as well:
	// register: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
	// 	}
	// },

	// loginUser: (credentials) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
	// 	}
	// },

	// currentUser: () => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
	// 	}
	// }
	
}
