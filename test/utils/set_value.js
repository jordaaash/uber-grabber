'use strict';

var resolveElement = require('./resolve_element');

var setValue = function* (element, value) {
    var ELEMENT  = yield resolveElement(element);
    var response = yield browser.elementIdClear(ELEMENT).elementIdValue(ELEMENT, value);
    return (response.state === 'success');
};

module.exports = setValue;
