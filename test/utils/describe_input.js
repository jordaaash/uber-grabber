'use strict';

const describeSetValue = require('./describe_set_value');

const describeInput = function (context, name, value) {
    return describeSetValue(context, 'input', name, value);
};

module.exports = describeInput;
