"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var Feeds = (function (_React$Component) {
    function Feeds() {
        _classCallCheck(this, Feeds);

        _get(Object.getPrototypeOf(Feeds.prototype), "constructor", this).call(this);
        this.state = {};
    }

    _inherits(Feeds, _React$Component);

    _prototypeProperties(Feeds, null, {
        componentDidMount: {
            value: function componentDidMount() {
                var _this = this;


                this.props.fetchFeeds(null).then(function (data) {
                    _this.setState({
                        feeds: data
                    });
                })["catch"](function (err) {
                    alert("Error: " + err.message);
                });
            },
            writable: true,
            configurable: true
        },
        selectFeed: {
            value: function selectFeed(feed, event) {
                event.preventDefault();
                this.props.selectFeed(feed);
                //convert xml to json
                var items = this.props.rss[feed.url];
                if (items != null) {
                    console.log("already");
                    return;
                }

                var endpoint = "https://api.rss2json.com/v1/api.json";
                var params = {
                    rss_url: feed.url
                };
                this.props.fetchRssFeed(endpoint, params).then(function (data) {
                    console.log("trash");
                    console.log("RSS FEED: " + JSON.stringify(data));
                }).error(function (err) {
                    alert("Error: " + err.message);
                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var _this = this;


                var feeds = this.props.feed.all || [];

                return React.createElement(
                    "ul",
                    null,
                    feeds.map(function (feed, i) {
                        var color = feed == _this.props.feed.selected ? "red" : "#333";
                        return React.createElement(
                            "li",
                            { key: feed.id },
                            React.createElement(
                                "a",
                                { style: { color: color }, href: "#", onClick: _this.selectFeed.bind(_this, feed) },
                                feed.name
                            )
                        );
                    })
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Feeds;
})(React.Component);

var stateToProps = function (state) {
    return {
        feed: state.feed, //referencing store property feed
        rss: state.rss
    };
};

var dispatchToProps = function (dispatch) {
    return {
        fetchFeeds: function (params) {
            return dispatch(actions.fetchFeeds(params));
        },
        addFeed: function (params) {
            return dispatch(actions.addFeed(params));
        },
        selectFeed: function (feed) {
            return dispatch(actions.selectFeed(feed));
        },
        fetchRssFeed: function (url, params) {
            return dispatch(actions.fetchRssFeed(url, params));
        }
    };
};

module.exports = connect(stateToProps, dispatchToProps)(Feeds);