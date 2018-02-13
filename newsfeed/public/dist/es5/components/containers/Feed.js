"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var Feed = (function (_React$Component) {
    function Feed() {
        _classCallCheck(this, Feed);

        _get(Object.getPrototypeOf(Feed.prototype), "constructor", this).call(this);
        this.state = {};
    }

    _inherits(Feed, _React$Component);

    _prototypeProperties(Feed, null, {
        render: {
            value: function render() {
                var selectedFeed = this.props.feed.selected;

                var name = "Welcome to NewsFeed";
                var items = [];

                if (selectedFeed) {
                    name = selectedFeed.name;
                    items = this.props.rss[selectedFeed.url] ? this.props.rss[selectedFeed.url] : [];
                }

                return React.createElement(
                    "div",
                    { className: "content" },
                    React.createElement(
                        "header",
                        null,
                        React.createElement(
                            "h1",
                            null,
                            name
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "ol",
                            null,
                            items.map(function (item, i) {
                                return React.createElement(
                                    "li",
                                    { key: i },
                                    React.createElement(
                                        "a",
                                        { style: style.link, target: "_blank", href: item.link },
                                        item.title
                                    )
                                );
                            })
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Feed;
})(React.Component);

var style = {
    link: {
        border: "none",
        padding: "10px",
        color: "blue"
    }
};

var stateToProps = function (state) {
    return {
        feed: state.feed, //referencing store property feed
        rss: state.rss
    };
};

var dispatchToProps = function (dispatch) {
    return {};
};

module.exports = connect(stateToProps, dispatchToProps)(Feed);