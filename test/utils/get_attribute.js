'use strict';

var resolveElement = require('./resolve_element');

var getAttribute = function* (element, attribute) {
    var ELEMENT   = yield resolveElement(element);
    var attribute = yield browser.elementIdAttribute(ELEMENT, attribute);
    return attribute.value;
};

module.exports = getAttribute;
