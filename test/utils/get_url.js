'use strict';

var getURL = function* () {
    var url = yield browser.url();
    return url.value;
};

module.exports = getURL;
