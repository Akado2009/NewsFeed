"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Feature = (function (Component) {
	function Feature() {
		_classCallCheck(this, Feature);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(Feature, Component);

	_prototypeProperties(Feature, null, {
		render: {
			value: function render() {
				return React.createElement(
					"article",
					null,
					React.createElement("span", { className: this.props.icon }),
					React.createElement(
						"div",
						{ className: "content" },
						React.createElement(
							"h3",
							null,
							"Portitor ullamcorper"
						),
						React.createElement(
							"p",
							null,
							"Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Feature;
})(Component);

module.exports = Feature;