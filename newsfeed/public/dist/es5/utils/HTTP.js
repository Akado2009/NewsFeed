"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var superagent = _interopRequire(require("superagent"));

var Promise = _interopRequire(require("bluebird"));

module.exports = {
    get: function (url, params) {
        return new Promise(function (resolve, reject) {
            superagent.get(url).query(params)
            // .set()
            .end(function (err, response) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(response.body);
            });
        });
    }
};