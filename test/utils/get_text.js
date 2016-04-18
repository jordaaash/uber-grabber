'use strict';

var getAttribute = require('./get_attribute');

var getText = function* (element) {
    return yield getAttribute(element, 'textContent');
};

module.exports = getText;
