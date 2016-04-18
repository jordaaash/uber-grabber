'use strict';

var start = function (path) {
    if (path == null) {
        path = '/';
    }
    return function* () {
        yield browser.init();
        yield browser.setViewportSize({ width:  1280, height: 800 }, false);
        yield browser.url(path);
    };
};

module.exports = start;
