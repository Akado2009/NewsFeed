"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Footer = _interopRequire(require("./Footer"));

var Search = _interopRequire(require("./Search"));

var Nav = _interopRequire(require("./Nav"));

var MiniPost = _interopRequire(require("./MiniPost"));

var Sidebar = (function (Component) {
  function Sidebar() {
    _classCallCheck(this, Sidebar);

    if (Component != null) {
      Component.apply(this, arguments);
    }
  }

  _inherits(Sidebar, Component);

  _prototypeProperties(Sidebar, null, {
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { id: "sidebar" },
          React.createElement(
            "div",
            { className: "inner" },
            React.createElement(Search, null),
            React.createElement(Nav, null),
            React.createElement(
              "section",
              null,
              React.createElement(
                "header",
                { className: "major" },
                React.createElement(
                  "h2",
                  null,
                  "Ante interdum"
                )
              ),
              React.createElement(
                "div",
                { className: "mini-posts" },
                React.createElement(MiniPost, null),
                React.createElement(MiniPost, null)
              ),
              React.createElement(
                "ul",
                { className: "actions" },
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "#", className: "button" },
                    "More"
                  )
                )
              )
            ),
            React.createElement(
              "section",
              null,
              React.createElement(
                "header",
                { className: "major" },
                React.createElement(
                  "h2",
                  null,
                  "Get in touch"
                )
              ),
              React.createElement(
                "p",
                null,
                "Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
              ),
              React.createElement(
                "ul",
                { className: "contact" },
                React.createElement(
                  "li",
                  { className: "fa-envelope-o" },
                  React.createElement(
                    "a",
                    { href: "#" },
                    "information@untitled.tld"
                  )
                ),
                React.createElement(
                  "li",
                  { className: "fa-phone" },
                  "(000) 000-0000"
                ),
                React.createElement(
                  "li",
                  { className: "fa-home" },
                  "1234 Somewhere Road #8254",
                  React.createElement("br", null),
                  "Nashville, TN 00000-0000"
                )
              )
            ),
            React.createElement(
              Footer,
              null,
              React.createElement(
                "p",
                { className: "copyright" },
                "© Untitled. All rights reserved. Demo Images: ",
                React.createElement(
                  "a",
                  { href: "https://unsplash.com" },
                  "Unsplash"
                ),
                ". Design: ",
                React.createElement(
                  "a",
                  { href: "https://html5up.net" },
                  "HTML5 UP"
                ),
                "."
              )
            )
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return Sidebar;
})(Component);

module.exports = Sidebar;