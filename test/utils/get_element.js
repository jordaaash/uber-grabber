'use strict';

var resolveElement = require('./resolve_element');

var getElement = function* (element, selector) {
    var ELEMENT    = yield resolveElement(element);
    var descendant = yield browser.elementIdElement(ELEMENT, selector);
    return descendant.value;
};

module.exports = getElement;
