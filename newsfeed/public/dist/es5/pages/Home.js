"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var _componentsContainers = require("../components/containers");

var Feeds = _componentsContainers.Feeds;
var Search = _componentsContainers.Search;
var Feed = _componentsContainers.Feed;
var Home = (function (_React$Component) {
    function Home() {
        _classCallCheck(this, Home);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Home, _React$Component);

    _prototypeProperties(Home, null, {
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    { id: "wrapper" },
                    React.createElement(
                        "div",
                        { id: "main" },
                        React.createElement(
                            "div",
                            { className: "inner" },
                            React.createElement(
                                "section",
                                { id: "banner" },
                                React.createElement(Feed, null)
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { id: "sidebar" },
                        React.createElement(
                            "div",
                            { className: "inner" },
                            React.createElement(Search, null),
                            React.createElement(
                                "nav",
                                { id: "menu" },
                                React.createElement(
                                    "header",
                                    { className: "major" },
                                    React.createElement(
                                        "h2",
                                        null,
                                        "My Feeds"
                                    )
                                ),
                                React.createElement(Feeds, null)
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Home;
})(React.Component);

module.exports = Home;