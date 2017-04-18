'use strict';

const stop = function () {
    return async function () {
        await browser.end();
    };
};

module.exports = stop;
