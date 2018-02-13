"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var ReactDOM = _interopRequire(require("react-dom"));

var Header = _interopRequire(require("./Header"));

var Footer = _interopRequire(require("./Footer"));

var Sidebar = _interopRequire(require("./Sidebar"));

var Feature = _interopRequire(require("./Feature"));

var Post = _interopRequire(require("./Post"));

var Elements = (function (Component) {
  function Elements() {
    _classCallCheck(this, Elements);

    if (Component != null) {
      Component.apply(this, arguments);
    }
  }

  _inherits(Elements, Component);

  _prototypeProperties(Elements, null, {
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
              React.createElement(Header, null),
              React.createElement(
                "section",
                { id: "banner" },
                React.createElement(
                  "div",
                  { className: "content" },
                  React.createElement(
                    "header",
                    null,
                    React.createElement(
                      "h1",
                      null,
                      "Hi, I’m Editorial",
                      React.createElement("br", null),
                      "by HTML5 UP"
                    ),
                    React.createElement(
                      "p",
                      null,
                      "A free and fully responsive site template"
                    )
                  ),
                  React.createElement(
                    "p",
                    null,
                    "Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam."
                  ),
                  React.createElement(
                    "ul",
                    { className: "actions" },
                    React.createElement(
                      "li",
                      null,
                      React.createElement(
                        "a",
                        { href: "#", className: "button big" },
                        "Learn More"
                      )
                    )
                  )
                ),
                React.createElement(
                  "span",
                  { className: "image object" },
                  React.createElement("img", { src: "https://placehold.it/736x512", alt: "" })
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
                    "Erat lacinia"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "features" },
                  React.createElement(Feature, { icon: "icon fa-diamond" }),
                  React.createElement(Feature, { icon: "icon fa-paper-plane" }),
                  React.createElement(Feature, { icon: "icon fa-rocket" }),
                  React.createElement(Feature, { icon: "icon fa-signal" })
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
                    "Ipsum sed dolor"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "posts" },
                  React.createElement(Post, null),
                  React.createElement(Post, null),
                  React.createElement(Post, null),
                  React.createElement(Post, null)
                )
              )
            )
          ),
          React.createElement(Sidebar, null)
        );
      },
      writable: true,
      configurable: true
    }
  });

  return Elements;
})(Component);

module.exports = Elements;