'use strict';

const start = function (path) {
    if (path == null) {
        path = '/';
    }
    return async function () {
        await browser.init();
        await browser.setViewportSize({ width:  1280, height: 800 }, false);
        await browser.url(path);
    };
};

module.exports = start;
