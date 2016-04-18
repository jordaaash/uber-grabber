'use strict';

var stop = function () {
    return function* () {
        yield browser.end();
    };
};

module.exports = stop;
