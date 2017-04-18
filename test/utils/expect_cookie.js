'use strict';

const expectCookie = async function (key) {
    const cookie = await browser.getCookie(key);
    expect(cookie).not.to.null;
    expect(cookie.value).not.to.be.empty;
};

module.exports = expectCookie;
