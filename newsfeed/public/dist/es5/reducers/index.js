"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Export your reducers here
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/


var feedReducer = _interopRequire(require("./feedReducer"));

var rssReducer = _interopRequire(require("./rssReducer"));

exports.rssReducer = rssReducer;
exports.feedReducer = feedReducer;
Object.defineProperty(exports, "__esModule", {
	value: true
});