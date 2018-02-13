"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a sample reducer or user management. If you remove 
	and use your own reducers, remember to update the store 
	file (../stores/index.js) with your reducers.
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/



var initialState = {
	all: null,
	selected: null
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	var newState = Object.assign({}, state);

	switch (action.type) {

		case constants.FEEDS_RECEIVED:
			newState.all = action.data;
			// console.log('feeds_received: '+ JSON.stringify(action.data))
			return newState;

		case constants.FEEDS_RECEIVED:
			var all = newState.all ? Object.assign([], newState.all) : [];
			all.unshift(action.data);
			newState.all = all;
			return newState;

		case constants.SELECT_FEED:
			newState.selected = action.data;
			return newState;

		default:
			return state;
	}
};