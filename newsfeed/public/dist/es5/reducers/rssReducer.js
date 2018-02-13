"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var initialState = {};

module.exports = function (_x, action) {
    var state = arguments[0] === undefined ? initialState : arguments[0];


    var newState = Object.assign({}, state);

    switch (action.type) {
        case constants.RSS_FEED_RECEIVED:
            newState[action.data.feed.url] = action.data.items;
            return newState;

        default:
            return state;
    }
};