'use strict';

var describeSetValue = require('./describe_set_value');

var describeInput = function (context, name, value) {
    return describeSetValue(context, 'input', name, value);
};

module.exports = describeInput;
