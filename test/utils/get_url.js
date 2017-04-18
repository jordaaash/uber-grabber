'use strict';

const getURL = async function () {
    const url = await browser.url();
    return url.value;
};

module.exports = getURL;
