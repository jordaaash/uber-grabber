'use strict';

const getAttribute = require('./get_attribute');

const getText = async function (element) {
    return await getAttribute(element, 'textContent');
};

module.exports = getText;
