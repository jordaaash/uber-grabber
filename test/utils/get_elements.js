'use strict';

var resolveElement = require('./resolve_element');

var getElements = function* (element, selector) {
    var ELEMENT     = yield resolveElement(element);
    var descendants = yield browser.elementIdElements(ELEMENT, selector);
    return descendants.value;
};

module.exports = getElements;
