'use strict';

var expectCookie = function* (key) {
    var cookie = yield browser.getCookie(key);
    expect(cookie).not.to.null;
    expect(cookie.value).not.to.be.empty;
};

module.exports = expectCookie;
