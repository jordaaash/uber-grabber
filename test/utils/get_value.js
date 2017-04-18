'use strict';

const getAttribute = require('./get_attribute');

const getValue = async function (element) {
    return await getAttribute(element, 'value');
};

module.exports = getValue;
