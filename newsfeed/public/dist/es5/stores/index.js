"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _redux = require("redux");

var createStore = _redux.createStore;
var applyMiddleware = _redux.applyMiddleware;
var combineReducers = _redux.combineReducers;
var thunk = _interopRequire(require("redux-thunk"));

var _reducers = require("../reducers");

var feedReducer = _reducers.feedReducer;
var rssReducer = _reducers.rssReducer;


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a store with one reducer: userReducer. When 
	adding more reducers, make sure to include them in 
	line 3 (above) and line 18 (below):
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var store;
module.exports = {

	configure: function (initialState) {
		// initialState can be null

		var reducers = combineReducers({ // insert reducers here
			feed: feedReducer,
			rss: rssReducer
		});

		if (initialState) {
			store = createStore(reducers, initialState, applyMiddleware(thunk));

			return store;
		}

		store = createStore(reducers, applyMiddleware(thunk));

		return store;
	},

	currentStore: function () {
		return store;
	}
};