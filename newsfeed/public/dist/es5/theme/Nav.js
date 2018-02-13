"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Nav = (function (Component) {
	function Nav() {
		_classCallCheck(this, Nav);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(Nav, Component);

	_prototypeProperties(Nav, null, {
		render: {
			value: function render() {
				return React.createElement(
					"nav",
					{ id: "menu" },
					React.createElement(
						"header",
						{ className: "major" },
						React.createElement(
							"h2",
							null,
							"Menu"
						)
					),
					React.createElement(
						"ul",
						null,
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "index.html" },
								"Homepage"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "generic.html" },
								"Generic"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "elements.html" },
								"Elements"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"span",
								{ className: "opener" },
								"Submenu"
							),
							React.createElement(
								"ul",
								null,
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										{ href: "#" },
										"Lorem Dolor"
									)
								),
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										{ href: "#" },
										"Ipsum Adipiscing"
									)
								),
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										{ href: "#" },
										"Tempus Magna"
									)
								),
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										{ href: "#" },
										"Feugiat Veroeros"
									)
								)
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								"Etiam Dolore"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								"Adipiscing"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"span",
								{ className: "opener" },
								"Another Submenu"
							),
							React.createElement(
								"ul",
								null,
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										{ href: "#" },
										"Lorem Dolor"
									)
								),
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										{ href: "#" },
										"Ipsum Adipiscing"
									)
								),
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										{ href: "#" },
										"Tempus Magna"
									)
								),
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										{ href: "#" },
										"Feugiat Veroeros"
									)
								)
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								"Maximus Erat"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								"Sapien Mauris"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								"Amet Lacinia"
							)
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Nav;
})(Component);

module.exports = Nav;