"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var _utils = require("../utils");

var TurboClient = _utils.TurboClient;
var HTTP = _utils.HTTP;



/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample actions for User managment.
	Feel free to remove and replace with your own actions
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var getRequest = function (endpoint, params, actionType) {
	return function (dispatch) {
		return HTTP.get(endpoint, params).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					params: params, // can be null
					data: data
				});
			}
			return data;
		})["catch"](function (err) {
			throw err;
		});
	};
};

module.exports = {

	fetchRssFeed: function (url, params) {
		return function (dispatch) {
			return dispatch(getRequest(url, params, constants.RSS_FEED_RECEIVED));
		};
	},

	selectFeed: function (feed) {
		return {
			type: constants.SELECT_FEED,
			data: feed
		};
	},

	fetchFeeds: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.getRequest("feed", params, constants.FEEDS_RECEIVED));
		};
	},

	addFeed: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.postRequest("feed", params, constants.ADD_FEED));
		};
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

};