'use strict';

var getAttribute = require('./get_attribute');

var getValue = function* (element) {
    return yield getAttribute(element, 'value');
};

module.exports = getValue;
