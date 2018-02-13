"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Header = (function (Component) {
	function Header() {
		_classCallCheck(this, Header);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(Header, Component);

	_prototypeProperties(Header, null, {
		render: {
			value: function render() {
				return React.createElement(
					"header",
					{ id: "header" },
					React.createElement(
						"a",
						{ href: "index.html", className: "logo" },
						React.createElement(
							"strong",
							null,
							"Editorial"
						),
						" by HTML5 UP"
					),
					React.createElement(
						"ul",
						{ className: "icons" },
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#", className: "icon fa-facebook" },
								React.createElement(
									"span",
									{ className: "label" },
									"Facebook"
								)
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#", className: "icon fa-snapchat-ghost" },
								React.createElement(
									"span",
									{ className: "label" },
									"Snapchat"
								)
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#", className: "icon fa-instagram" },
								React.createElement(
									"span",
									{ className: "label" },
									"Instagram"
								)
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#", className: "icon fa-medium" },
								React.createElement(
									"span",
									{ className: "label" },
									"Medium"
								)
							)
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Header;
})(Component);

module.exports = Header;